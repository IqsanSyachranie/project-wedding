import { describe, it, expect, beforeAll } from "vitest";
import bcryptjs from "bcryptjs";
import { prisma } from "../../src/lib/prisma";
import process from "node:process";
import { seedAdmin } from "../../prisma/seed";

describe("Admin Seed Integration", () => {
  beforeAll(async () => {
    // Ensure the DB is seeded before running tests
    await seedAdmin();
  });

  it("should have seeded an admin user with a hashed password", async () => {
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    // Must match the fallback logic in seed.ts for tests
    const adminPassword = process.env.ADMIN_PASSWORD || "Dev@ChangeMeNow!99";

    const admin = await prisma.adminUser.findUnique({
      where: { username: adminUsername },
    });

    expect(admin).toBeDefined();
    expect(admin?.username).toBe(adminUsername);
    
    // Verify password is NOT the plaintext password
    // Using ?. and toBeDefined() gives a clean assertion failure instead of a TypeError if admin is null
    expect(admin?.password).toBeDefined();
    expect(admin?.password).not.toBe(adminPassword);
    
    // Verify password can be compared using bcryptjs
    const isMatch = await bcryptjs.compare(adminPassword, admin!.password);
    expect(isMatch).toBe(true);
  });
});
