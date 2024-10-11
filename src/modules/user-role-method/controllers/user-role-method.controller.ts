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
import { IUserRoleMethodDTO } from '../dtos/user-role-method.dto';
import { UserRoleMethodService } from './../services/user-role-method.service';

@Controller('user-role-methods')
export class UserRoleMethodController {
  constructor(private readonly userRoleMethodService: UserRoleMethodService) {}

  @Get()
  async list(): Promise<IUserRoleMethodDTO[]> {
    try {
      return this.userRoleMethodService.list();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<IUserRoleMethodDTO> {
    try {
      return await this.userRoleMethodService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() data: IUserRoleMethodDTO): Promise<IUserRoleMethodDTO> {
    try {
      return await this.userRoleMethodService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return await this.userRoleMethodService.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() userRoleMethod: IUserRoleMethodDTO,
  ): Promise<IUserRoleMethodDTO> {
    try {
      return await this.userRoleMethodService.update(id, userRoleMethod);
    } catch (error) {
      throw error;
    }
  }
}
