/*
  Warnings:

  - You are about to drop the `_TeamRoleToTeamRoleMethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TeamToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `team_role_methods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `team_roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TeamRoleToTeamRoleMethod" DROP CONSTRAINT "_TeamRoleToTeamRoleMethod_A_fkey";

-- DropForeignKey
ALTER TABLE "_TeamRoleToTeamRoleMethod" DROP CONSTRAINT "_TeamRoleToTeamRoleMethod_B_fkey";

-- DropForeignKey
ALTER TABLE "_TeamToUser" DROP CONSTRAINT "_TeamToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TeamToUser" DROP CONSTRAINT "_TeamToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "team_roles" DROP CONSTRAINT "team_roles_team_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "participant_role_id" INTEGER;

-- DropTable
DROP TABLE "_TeamRoleToTeamRoleMethod";

-- DropTable
DROP TABLE "_TeamToUser";

-- DropTable
DROP TABLE "team_role_methods";

-- DropTable
DROP TABLE "team_roles";

-- CreateTable
CREATE TABLE "participant_role" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "participant_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participant_method" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "participant_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ParticipantMethodToParticipantRole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ParticipantMethodToParticipantRole_AB_unique" ON "_ParticipantMethodToParticipantRole"("A", "B");

-- CreateIndex
CREATE INDEX "_ParticipantMethodToParticipantRole_B_index" ON "_ParticipantMethodToParticipantRole"("B");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_participant_role_id_fkey" FOREIGN KEY ("participant_role_id") REFERENCES "participant_role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipantMethodToParticipantRole" ADD CONSTRAINT "_ParticipantMethodToParticipantRole_A_fkey" FOREIGN KEY ("A") REFERENCES "participant_method"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipantMethodToParticipantRole" ADD CONSTRAINT "_ParticipantMethodToParticipantRole_B_fkey" FOREIGN KEY ("B") REFERENCES "participant_role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
