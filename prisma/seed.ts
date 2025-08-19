import prisma from "../prisma/prismaClient";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

async function main() {
  const adminEmail = "admin@valuevillage.com";
  const adminName = "Admin";

  const adminPassword = "admin123";
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  let adminRole = await prisma.role.findUnique({ where: { name: "admin" } });
  if (!adminRole) {
    adminRole = await prisma.role.create({
      data: { id: uuidv4(), name: "admin" },
    });
  }

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        name: adminName,
        email: adminEmail,
        password: hashedPassword,
        roleId: adminRole.id,
      },
    });
    console.log("Admin user created.");
  } else {
    console.log("Admin user already exists.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
