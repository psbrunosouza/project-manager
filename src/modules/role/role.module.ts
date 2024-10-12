import { Module } from '@nestjs/common';
import { UserRoleController } from './controllers/role.controller';
import { UserRoleRepository } from './repositories/role.repository';
import { UserRoleService } from './services/role.service';

@Module({
  imports: [],
  controllers: [UserRoleController],
  providers: [UserRoleRepository, UserRoleService],
  exports: [],
})
export class UserRoleModule {}
