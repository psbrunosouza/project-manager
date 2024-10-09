/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Method` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectTeamRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectTeamRoleMethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `campaign` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_project_teams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectTeamRole" DROP CONSTRAINT "ProjectTeamRole_project_team_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectTeamRoleMethod" DROP CONSTRAINT "ProjectTeamRoleMethod_project_team_role_id_fkey";

-- DropForeignKey
ALTER TABLE "campaign" DROP CONSTRAINT "campaign_project_id_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_category_id_fkey";

-- DropForeignKey
ALTER TABLE "users_project_teams" DROP CONSTRAINT "users_project_teams_project_team_id_fkey";

-- DropForeignKey
ALTER TABLE "users_project_teams" DROP CONSTRAINT "users_project_teams_user_id_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Method";

-- DropTable
DROP TABLE "ProjectTeamRole";

-- DropTable
DROP TABLE "ProjectTeamRoleMethod";

-- DropTable
DROP TABLE "campaign";

-- DropTable
DROP TABLE "users_project_teams";

-- CreateTable
CREATE TABLE "users_on_teams" (
    "user_id" INTEGER NOT NULL,
    "project_team_id" INTEGER NOT NULL,

    CONSTRAINT "users_on_teams_pkey" PRIMARY KEY ("user_id","project_team_id")
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "finished_at" TIMESTAMP(3),
    "project_id" INTEGER,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_team_roles" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "project_team_id" INTEGER,

    CONSTRAINT "project_team_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_team_role_methods" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "project_team_role_id" INTEGER,

    CONSTRAINT "project_team_role_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "methods" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "methods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_on_teams" ADD CONSTRAINT "users_on_teams_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_on_teams" ADD CONSTRAINT "users_on_teams_project_team_id_fkey" FOREIGN KEY ("project_team_id") REFERENCES "project_teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_team_roles" ADD CONSTRAINT "project_team_roles_project_team_id_fkey" FOREIGN KEY ("project_team_id") REFERENCES "project_teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_team_role_methods" ADD CONSTRAINT "project_team_role_methods_project_team_role_id_fkey" FOREIGN KEY ("project_team_role_id") REFERENCES "project_team_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
