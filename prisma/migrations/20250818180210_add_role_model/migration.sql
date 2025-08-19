/*
  Warnings:

  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
ALTER TABLE "User" ADD COLUMN     "roleId" TEXT;

CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- Insert default admin role
INSERT INTO "Role" ("id", "name") VALUES ('00000000-0000-0000-0000-000000000001', 'admin');

CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");


-- Set all existing users to admin role
UPDATE "User" SET "roleId" = '00000000-0000-0000-0000-000000000001' WHERE "roleId" IS NULL;

-- Make roleId NOT NULL
ALTER TABLE "User" ALTER COLUMN "roleId" SET NOT NULL;

-- Add foreign key
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
