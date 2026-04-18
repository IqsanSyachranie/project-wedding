import "dotenv/config";
import bcryptjs from "bcryptjs";
import { prisma } from "../src/lib/prisma";
import process from "node:process";

/**
 * Seeds the initial admin user.
 * Uses upsert in create-only mode (update: {}) — an existing DB password
 * is never overwritten on re-seed. Run with --force to reset (manual only).
 */
export async function seedAdmin() {
  const adminUsername = process.env.ADMIN_USERNAME || "admin";

  if (!process.env.ADMIN_PASSWORD && process.env.NODE_ENV === "production") {
    throw new Error(
      "ADMIN_PASSWORD environment variable must be set in production."
    );
  }

  // dev fallback: not a known weak password, but still change before any real use
  const adminPassword = process.env.ADMIN_PASSWORD || "Dev@ChangeMeNow!99";

  console.log(`Seeding admin user: ${adminUsername}...`);

  const hashedPassword = await bcryptjs.hash(adminPassword, 10);

  const admin = await prisma.adminUser.upsert({
    where: { username: adminUsername },
    update: {}, // D1: never overwrite an existing password — seed is create-only
    create: {
      username: adminUsername,
      password: hashedPassword,
    },
  });

  console.log(`Admin user "${admin.username}" seeded successfully.`);
}

async function main() {
  await seedAdmin();
}

// Only auto-run when executed directly (bun prisma/seed.ts), not when imported by tests
if (import.meta.main) {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect(); // F5: ensure process exits cleanly
    });
}
