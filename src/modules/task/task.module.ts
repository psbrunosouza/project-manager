import { Module } from '@nestjs/common';
import { TaskController } from './controllers/task.controller';
import { TaskRepository } from './repositories/task.repositories';
import { TaskService } from './services/task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskRepository, TaskService],
})
export class TaskModule {}
