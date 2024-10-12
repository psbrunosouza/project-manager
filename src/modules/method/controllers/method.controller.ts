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
import { IMethodDTO } from '../dtos/method.dto';
import { MethodService } from '../services/method.service';

@Controller('methods')
export class MethodController {
  constructor(private readonly methodService: MethodService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: IMethodDTO): Promise<IMethodDTO> {
    try {
      return this.methodService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async list(): Promise<IMethodDTO[]> {
    try {
      return this.methodService.list();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IMethodDTO> {
    try {
      return this.methodService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: IMethodDTO,
  ): Promise<IMethodDTO> {
    try {
      return this.methodService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.methodService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
