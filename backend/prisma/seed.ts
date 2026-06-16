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

async function seedInvitationDefaults() {
  let invitation = await prisma.invitation.findFirst({
    orderBy: { id: 'asc' },
  });

  if (!invitation) {
    invitation = await prisma.invitation.create({ data: {} });
    console.log(`Created default invitation with id ${invitation.id}`);
  }

  const invitationId = invitation.id;

  await prisma.invitationConfig.upsert({
    where: { invitationId },
    update: {},
    create: {
      invitationId,
      heroCoupleNames: 'Arif & Sari',
      heroOpeningLine: 'Mohon Doa Restu atas pernikahan putra-putri kami',
      heroWeddingDateText: 'Sabtu, 17 Oktober 2026',
      weddingDate: new Date('2026-10-17T09:00:00+07:00'),
      primaryColor: '#8B4513',
      secondaryColor: '#DAA520',
      backgroundColor: '#FDF5E6',
      textColor: '#2F4F4F',
      footerGreeting: "Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu kepada kami",
      footerClosingText: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
      lockedLandingEnabled: true,
      lockedLandingButtonText: 'Buka Undangan',
      lockedLandingGreeting: 'Kami mengundang Anda untuk hadir dalam momen bahagia kami',
      musicEnabled: true,
      musicButtonPosition: 'bottom-right',
    },
  });

  const existingCoupleInfo = await prisma.coupleInfo.findFirst({ where: { invitationId } });
  if (!existingCoupleInfo) {
    await prisma.coupleInfo.create({
      data: {
        invitationId,
        groomName: 'Arif Prayoga',
        brideName: 'Sari Dewi',
        groomParents: 'Putra dari Bapak Ahmad & Ibu Fatimah',
        brideParents: 'Putri dari Bapak Budi & Ibu Sri',
        greetingText: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu',
      },
    });
  }

  const existingPhilosophy = await prisma.philosophyConfig.findUnique({ where: { invitationId } });
  if (!existingPhilosophy) {
    await prisma.philosophyConfig.create({
      data: {
        invitationId,
        quoteText: "Mikul dhuwur mendhem jero\nArtinya menjunjung tinggi kebaikan dan\nmemendam keburukan demi keharmonisan",
        prayerText: "Semoga Allah SWT meridhoi pernikahan ini,\nmenjadikannya langgeng, penuh berkah,\ndan menjadi keluarga yang sakinah, mawaddah, wa rahmah.",
      },
    });
  }

  const storyCount = await prisma.storyItem.count({ where: { invitationId } });
  if (storyCount === 0) {
    await prisma.storyItem.createMany({
      data: [
        {
          invitationId,
          title: 'Pertama Bertemu',
          body: 'Berawal dari sebuah pertemuan yang tak terduga, hati kami mulai bersatu dalam ikatan persahabatan yang kemudian tumbuh menjadi cinta. Setiap momen bersama terasa begitu berarti.',
          sortOrder: 0,
        },
        {
          invitationId,
          title: 'Lamaran',
          body: 'Dengan penuh kerendahan hati, sebuah pertanyaan diajukan dan diterima dengan sukacita. Keluarga besar turut merestui langkah suci ini menuju jenjang yang lebih serius.',
          sortOrder: 1,
        },
        {
          invitationId,
          title: 'Menuju Pernikahan',
          body: 'Kini tibalah saatnya kami melangkah ke pelaminan, mengikat janji suci untuk saling mencintai dan menyayangi dalam ikatan pernikahan yang diridhoi Allah.',
          sortOrder: 2,
        },
      ],
    });
  }

  console.log('Invitation defaults seeded successfully.');
}

async function main() {
  await seedAdmin();
  await seedInvitationDefaults();
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
