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
import { IParticipantMethodDTO } from '../dtos/participant-method.dto';
import { ParticipantMethodService } from '../services/participant-method.service';

@Controller('participant-methods')
export class ParticipantMethodController {
  constructor(private participantMethodService: ParticipantMethodService) {}

  @Post()
  async create(@Body() data: IParticipantMethodDTO) {
    try {
      return await this.participantMethodService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async list() {
    try {
      return await this.participantMethodService.list();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.participantMethodService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: IParticipantMethodDTO,
  ) {
    try {
      return await this.participantMethodService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.participantMethodService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
