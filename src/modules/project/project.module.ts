import { Module } from '@nestjs/common';
import { ProjectRepository } from './repositories/project.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [ProjectRepository],
  exports: [],
})
export class ProjectModule {}
