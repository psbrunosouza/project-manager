/*
  Warnings:

  - You are about to drop the `method_on_role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "method_on_role" DROP CONSTRAINT "method_on_role_method_id_fkey";

-- DropForeignKey
ALTER TABLE "method_on_role" DROP CONSTRAINT "method_on_role_role_id_fkey";

-- DropTable
DROP TABLE "method_on_role";

-- CreateTable
CREATE TABLE "_MethodToRole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MethodToRole_AB_unique" ON "_MethodToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_MethodToRole_B_index" ON "_MethodToRole"("B");

-- AddForeignKey
ALTER TABLE "_MethodToRole" ADD CONSTRAINT "_MethodToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "methods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MethodToRole" ADD CONSTRAINT "_MethodToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "user_roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
