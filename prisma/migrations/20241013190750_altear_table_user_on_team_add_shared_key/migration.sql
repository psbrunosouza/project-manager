/*
  Warnings:

  - The primary key for the `users_on_teams` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users_on_teams` table. All the data in the column will be lost.
  - Made the column `user_id` on table `users_on_teams` required. This step will fail if there are existing NULL values in that column.
  - Made the column `team_id` on table `users_on_teams` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users_on_teams" DROP CONSTRAINT "users_on_teams_pkey",
DROP COLUMN "id",
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "team_id" SET NOT NULL,
ADD CONSTRAINT "users_on_teams_pkey" PRIMARY KEY ("user_id", "team_id");
