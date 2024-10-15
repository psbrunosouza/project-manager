/*
  Warnings:

  - You are about to drop the `_ParticipantRoleToTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ParticipantRoleToTeam" DROP CONSTRAINT "_ParticipantRoleToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_ParticipantRoleToTeam" DROP CONSTRAINT "_ParticipantRoleToTeam_B_fkey";

-- DropForeignKey
ALTER TABLE "users_on_teams" DROP CONSTRAINT "users_on_teams_role_id_fkey";

-- DropTable
DROP TABLE "_ParticipantRoleToTeam";

-- AddForeignKey
ALTER TABLE "users_on_teams" ADD CONSTRAINT "users_on_teams_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "participant_roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
