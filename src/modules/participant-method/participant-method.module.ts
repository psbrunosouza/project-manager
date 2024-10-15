import { Module } from '@nestjs/common';
import { ParticipantMethodController } from './controllers/participant-method.controller';
import { ParticipantMethodRepository } from './repositories/participant-method.repository';
import { ParticipantMethodService } from './services/participant-method.service';

@Module({
  controllers: [ParticipantMethodController],
  providers: [ParticipantMethodService, ParticipantMethodRepository],
})
export class ParticipantMethodModule {
  constructor() {}
}
