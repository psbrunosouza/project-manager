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
import { IUserRoleDTO } from '../dtos/user-role.dto';
import { UserRoleService } from '../services/user-role.service';

@Controller('user-roles')
export class UserRoleController {
  constructor(private userRoleService: UserRoleService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() userRole: IUserRoleDTO): Promise<IUserRoleDTO> {
    return this.userRoleService.create(userRole);
  }

  @Get()
  list(): Promise<IUserRoleDTO[]> {
    return this.userRoleService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<IUserRoleDTO> {
    return this.userRoleService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userRoleService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() userRole: IUserRoleDTO,
  ): Promise<IUserRoleDTO> {
    return this.userRoleService.update(id, userRole);
  }
}
