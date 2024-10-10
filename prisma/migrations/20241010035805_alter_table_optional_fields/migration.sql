-- AlterTable
ALTER TABLE "campaigns" ALTER COLUMN "cover" DROP NOT NULL;

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "cover" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "avatar" DROP NOT NULL;
