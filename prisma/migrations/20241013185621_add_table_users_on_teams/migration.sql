/*
  Warnings:

  - You are about to drop the column `project_id` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `participant_role_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `participant_method` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `participant_role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ParticipantMethodToParticipantRole" DROP CONSTRAINT "_ParticipantMethodToParticipantRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_ParticipantMethodToParticipantRole" DROP CONSTRAINT "_ParticipantMethodToParticipantRole_B_fkey";

-- DropForeignKey
ALTER TABLE "teams" DROP CONSTRAINT "teams_project_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_participant_role_id_fkey";

-- AlterTable
ALTER TABLE "teams" DROP COLUMN "project_id";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "participant_role_id";

-- DropTable
DROP TABLE "participant_method";

-- DropTable
DROP TABLE "participant_role";

-- CreateTable
CREATE TABLE "participant_roles" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "participant_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participant_methods" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "participant_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_on_teams" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "team_id" INTEGER,
    "role_id" INTEGER,

    CONSTRAINT "users_on_teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTeam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ParticipantRoleToTeam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTeam_AB_unique" ON "_ProjectToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTeam_B_index" ON "_ProjectToTeam"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ParticipantRoleToTeam_AB_unique" ON "_ParticipantRoleToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_ParticipantRoleToTeam_B_index" ON "_ParticipantRoleToTeam"("B");

-- AddForeignKey
ALTER TABLE "users_on_teams" ADD CONSTRAINT "users_on_teams_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_on_teams" ADD CONSTRAINT "users_on_teams_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_on_teams" ADD CONSTRAINT "users_on_teams_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTeam" ADD CONSTRAINT "_ProjectToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTeam" ADD CONSTRAINT "_ProjectToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipantRoleToTeam" ADD CONSTRAINT "_ParticipantRoleToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "participant_roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipantRoleToTeam" ADD CONSTRAINT "_ParticipantRoleToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipantMethodToParticipantRole" ADD CONSTRAINT "_ParticipantMethodToParticipantRole_A_fkey" FOREIGN KEY ("A") REFERENCES "participant_methods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipantMethodToParticipantRole" ADD CONSTRAINT "_ParticipantMethodToParticipantRole_B_fkey" FOREIGN KEY ("B") REFERENCES "participant_roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
