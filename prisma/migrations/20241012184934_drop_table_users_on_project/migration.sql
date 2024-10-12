/*
  Warnings:

  - You are about to drop the `users_on_teams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users_on_teams" DROP CONSTRAINT "users_on_teams_project_team_id_fkey";

-- DropForeignKey
ALTER TABLE "users_on_teams" DROP CONSTRAINT "users_on_teams_user_id_fkey";

-- DropTable
DROP TABLE "users_on_teams";

-- CreateTable
CREATE TABLE "_ProjectTeamToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectTeamToUser_AB_unique" ON "_ProjectTeamToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectTeamToUser_B_index" ON "_ProjectTeamToUser"("B");

-- AddForeignKey
ALTER TABLE "_ProjectTeamToUser" ADD CONSTRAINT "_ProjectTeamToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "project_teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTeamToUser" ADD CONSTRAINT "_ProjectTeamToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
