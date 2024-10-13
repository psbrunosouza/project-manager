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
import { ITeamDTO } from '../dtos/team.dto';
import { TeamService } from '../services/team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async create(@Body() data: ITeamDTO) {
    try {
      return await this.teamService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: ITeamDTO) {
    try {
      return await this.teamService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.teamService.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.teamService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async list() {
    try {
      return await this.teamService.list();
    } catch (error) {
      throw error;
    }
  }
}
