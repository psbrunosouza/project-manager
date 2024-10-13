import { Module } from '@nestjs/common';
import { TeamController } from './controllers/team.controller';
import { TeamRepository } from './repositories/team.repository';
import { TeamService } from './services/team.service';

@Module({
  imports: [],
  controllers: [TeamController],
  providers: [TeamService, TeamRepository],
  exports: [],
})
export class TeamModule {}
