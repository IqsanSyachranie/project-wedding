import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import type { SuperAgentTest } from "supertest";
import { app } from "../../src/app.js";
import { seedAdmin } from "../../prisma/seed.js";
import process from "node:process";

describe("Auth Login Integration", () => {
  let agent: SuperAgentTest;
  let csrfToken: string;

  beforeAll(async () => {
    // 1. Seed admin
    await seedAdmin();

    // 2. Initialize supertest agent to handle cookies automatically
    agent = request.agent(app);

    // 3. Get CSRF token
    const response = await agent.get("/api/v1/auth/csrf");
    csrfToken = response.body.data.csrfToken;
  });

  it("should login successfully with correct credentials", async () => {
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "Dev@ChangeMeNow!99";

    const response = await agent
      .post("/api/v1/auth/login")
      .set("x-csrf-token", csrfToken)
      .send({
        username: adminUsername,
        password: adminPassword,
      });

    expect(response.status).toBe(200);
    expect(response.body.data.success).toBe(true);
    expect(response.body.data.message).toBe("Login successful");
    expect(response.headers["set-cookie"]).toBeDefined();
    // Verify session cookie is set (sid)
    const hasSessionCookie = response.headers["set-cookie"].some((c: string) => c.startsWith("sid="));
    expect(hasSessionCookie).toBe(true);
  });

  it("should fail login with wrong password", async () => {
    const adminUsername = process.env.ADMIN_USERNAME || "admin";

    const response = await agent
      .post("/api/v1/auth/login")
      .set("x-csrf-token", csrfToken)
      .send({
        username: adminUsername,
        password: "wrong-password",
      });

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });

  it("should fail login with non-existent user", async () => {
    const response = await agent
      .post("/api/v1/auth/login")
      .set("x-csrf-token", csrfToken)
      .send({
        username: "non-existent-user",
        password: "some-password",
      });

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe("UNAUTHORIZED");
  });

  it("should fail login with malformed payload (Zod validation)", async () => {
    const response = await agent
      .post("/api/v1/auth/login")
      .set("x-csrf-token", csrfToken)
      .send({
        username: "u", // too short
        password: "p", // too short
      });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("VALIDATION_ERROR");
  });

  it("should fail login without CSRF token", async () => {
    // We use a fresh request (not agent) to ensure no cookies/tokens are sent if we want to test that specifically
    // But agent would also fail if we don't set the header.
    const response = await agent
      .post("/api/v1/auth/login")
      // .set("x-csrf-token", "") // Omitting header
      .send({
        username: "admin",
        password: "password",
      });

    expect(response.status).toBe(403);
    expect(response.body.error.code).toBe("INVALID_CSRF_TOKEN");
  });
});
