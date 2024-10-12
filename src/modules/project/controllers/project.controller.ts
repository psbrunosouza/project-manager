import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IProjectDTO } from '../dtos/project.dto';
import { ProjectService } from '../services/project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: IProjectDTO): Promise<IProjectDTO> {
    try {
      return this.projectService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: IProjectDTO,
  ): Promise<IProjectDTO> {
    try {
      return this.projectService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.projectService.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<IProjectDTO> {
    try {
      return this.projectService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  list(): Promise<IProjectDTO[]> {
    try {
      return this.projectService.list();
    } catch (error) {
      throw error;
    }
  }
}
