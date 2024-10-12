import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UserRoleController } from './controllers/role.controller';
import { UserRoleRepository } from './repositories/role.repository';
import { UserRoleService } from './services/role.service';

@Module({
  imports: [],
  controllers: [UserRoleController],
  providers: [UserRoleRepository, UserRoleService, PrismaService],
  exports: [],
})
export class UserRoleModule {}
