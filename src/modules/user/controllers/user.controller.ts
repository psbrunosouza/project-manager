import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PublicAccess } from 'src/shared/decorators/public-access.decorator';
import { IUserDTO } from '../dtos/user.dto';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @PublicAccess()
  async create(@Body() data: IUserDTO): Promise<Omit<IUserDTO, 'password'>> {
    try {
      return await this.userService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async list(): Promise<IUserDTO[]> {
    try {
      return await this.userService.list();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IUserDTO> {
    try {
      return await this.userService.findById(id);
    } catch (error) {
      throw error;
    }
  }
}
