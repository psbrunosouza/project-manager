import { Injectable } from '@nestjs/common';
import { ITaskDTO } from '../dtos/task.dto';
import { TaskRepository } from '../repositories/task.repositories';

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  create(data: ITaskDTO): Promise<ITaskDTO> {
    return this.taskRepository.create(data);
  }

  update(id: number, data: ITaskDTO): Promise<ITaskDTO> {
    return this.taskRepository.update(id, data);
  }

  delete(id: number): Promise<void> {
    return this.taskRepository.delete(id);
  }

  findById(id: number): Promise<ITaskDTO> {
    return this.taskRepository.findById(id);
  }

  list(): Promise<ITaskDTO[]> {
    return this.taskRepository.list();
  }

  finishTask(id: number): Promise<ITaskDTO> {
    return this.taskRepository.finishTask(id);
  }
}
