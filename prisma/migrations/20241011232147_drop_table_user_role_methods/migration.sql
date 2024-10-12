/*
  Warnings:

  - You are about to drop the column `user_role_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `user_role_methods` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_role_methods" DROP CONSTRAINT "user_role_methods_user_role_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_user_role_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "user_role_id",
ADD COLUMN     "roleId" INTEGER;

-- DropTable
DROP TABLE "user_role_methods";

-- CreateTable
CREATE TABLE "method_on_role" (
    "role_id" INTEGER NOT NULL,
    "method_id" INTEGER NOT NULL,

    CONSTRAINT "method_on_role_pkey" PRIMARY KEY ("role_id","method_id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "user_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "method_on_role" ADD CONSTRAINT "method_on_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "user_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "method_on_role" ADD CONSTRAINT "method_on_role_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
