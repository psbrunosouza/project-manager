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
import { IParticipantRoleDTO } from '../dtos/participant-role.dto';
import { ParticipantRoleService } from '../services/participant-role.service';

@Controller('participant-roles')
export class ParticipantRoleController {
  constructor(
    private readonly participantRoleService: ParticipantRoleService,
  ) {}

  @Post()
  async create(@Body() data: IParticipantRoleDTO) {
    try {
      return await this.participantRoleService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async list() {
    try {
      return await this.participantRoleService.list();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.participantRoleService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: IParticipantRoleDTO,
  ) {
    try {
      return await this.participantRoleService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.participantRoleService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
