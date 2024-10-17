import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ITaskDTO } from '../dtos/task.dto';
import { TaskService } from '../services/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  create(@Body() data: ITaskDTO): Promise<ITaskDTO> {
    try {
      return this.taskService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ITaskDTO,
  ): Promise<ITaskDTO> {
    try {
      return this.taskService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.taskService.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<ITaskDTO> {
    try {
      return this.taskService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  list(): Promise<ITaskDTO[]> {
    try {
      return this.taskService.list();
    } catch (error) {
      throw error;
    }
  }
}
