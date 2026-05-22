import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import type { SuperAgentTest } from "supertest";
import { app } from "../../src/app.js";
import { seedAdmin } from "../../prisma/seed.js";
import process from "node:process";

describe("Auth Logout Integration", () => {
  let agent: SuperAgentTest;
  let csrfToken: string;

  beforeAll(async () => {
    // 1. Seed admin
    await seedAdmin();

    // 2. Initialize supertest agent
    agent = request.agent(app);

    // 3. Get initial CSRF token
    const response = await agent.get("/api/v1/auth/csrf");
    csrfToken = response.body.data.csrfToken;
  });

  it("should logout successfully and clear session cookie", async () => {
    // 1. Login first
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "Dev@ChangeMeNow!99";

    await agent
      .post("/api/v1/auth/login")
      .set("x-csrf-token", csrfToken)
      .send({
        username: adminUsername,
        password: adminPassword,
      });

    // 2. Verify we are logged in (check /me)
    const checkResponse = await agent.get("/api/v1/auth/me");
    expect(checkResponse.status).toBe(200);
    expect(checkResponse.body.data.authenticated).toBe(true);

    // 3. Get fresh CSRF token for logout (though sometimes same token works, best practice to get fresh if needed or use existing session token)
    // Actually, CSRF middleware usually keeps token in session. 
    // Let's get a fresh one to be sure we have the one associated with the logged-in session.
    const csrfRes = await agent.get("/api/v1/auth/csrf");
    const logoutCsrfToken = csrfRes.body.data.csrfToken;

    // 4. Perform logout
    const logoutResponse = await agent
      .post("/api/v1/auth/logout")
      .set("x-csrf-token", logoutCsrfToken)
      .send({});

    expect(logoutResponse.status).toBe(200);
    expect(logoutResponse.body.data.success).toBe(true);
    
    // 5. Verify cookie is cleared (sid should be empty or set to expire)
    const setCookie = logoutResponse.headers["set-cookie"];
    expect(setCookie).toBeDefined();
    const isSidCleared = setCookie.some((c: string) => c.startsWith("sid=;") || c.includes("Expires="));
    expect(isSidCleared).toBe(true);

    // 6. Verify we are unauthenticated (check /me)
    const finalCheckResponse = await agent.get("/api/v1/auth/me");
    expect(finalCheckResponse.status).toBe(401);
  });

  it("should fail logout without CSRF token", async () => {
    const response = await agent
      .post("/api/v1/auth/logout")
      .send({});

    expect(response.status).toBe(403);
    expect(response.body.error.code).toBe("INVALID_CSRF_TOKEN");
  });
});
