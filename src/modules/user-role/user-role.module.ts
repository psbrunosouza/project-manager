import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UserRoleController } from './controllers/user-role.controller';
import { UserRoleRepository } from './repositories/user-role.repository';
import { UserRoleService } from './services/user-role.service';

@Module({
  imports: [],
  controllers: [UserRoleController],
  providers: [UserRoleRepository, UserRoleService, PrismaService],
  exports: [],
})
export class UserRoleModule {}
