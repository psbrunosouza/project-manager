import { Module } from '@nestjs/common';
import { ParticipantRoleController } from './controllers/participant-role.controller';
import { ParticipantRoleRepository } from './repositories/participant-role.repository';
import { ParticipantRoleService } from './services/participant-role.service';

@Module({
  imports: [],
  controllers: [ParticipantRoleController],
  providers: [ParticipantRoleRepository, ParticipantRoleService],
  exports: [],
})
export class ParticipantRoleModule {}
