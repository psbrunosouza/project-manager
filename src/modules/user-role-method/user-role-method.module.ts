import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UserRoleMethodController } from './controllers/user-role-method.controller';
import { UserRoleMethodRepository } from './repositories/user-role-method.repository';
import { UserRoleMethodService } from './services/user-role-method.service';

@Module({
  imports: [],
  controllers: [UserRoleMethodController],
  providers: [UserRoleMethodService, UserRoleMethodRepository, PrismaService],
  exports: [],
})
export class UserRoleMethodModule {}
