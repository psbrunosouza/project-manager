import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectRepository } from './repositories/project.repository';
import { ProjectService } from './services/project.service';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [ProjectRepository, ProjectService],
  exports: [],
})
export class ProjectModule {}
