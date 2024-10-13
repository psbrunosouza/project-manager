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
  async create(@Body() data: IProjectDTO): Promise<IProjectDTO> {
    try {
      return await this.projectService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: IProjectDTO,
  ): Promise<IProjectDTO> {
    try {
      return await this.projectService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return await this.projectService.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IProjectDTO> {
    try {
      return await this.projectService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async list(): Promise<IProjectDTO[]> {
    try {
      return await this.projectService.list();
    } catch (error) {
      throw error;
    }
  }
}
