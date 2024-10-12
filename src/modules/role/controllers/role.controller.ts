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
import { IRoleDTO } from '../dtos/role.dto';
import { UserRoleService } from '../services/role.service';

@Controller('roles')
export class UserRoleController {
  constructor(private userRoleService: UserRoleService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() userRole: IRoleDTO): Promise<IRoleDTO> {
    return this.userRoleService.create(userRole);
  }

  @Get()
  list(): Promise<IRoleDTO[]> {
    return this.userRoleService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<IRoleDTO> {
    return this.userRoleService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userRoleService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() userRole: IRoleDTO,
  ): Promise<IRoleDTO> {
    return this.userRoleService.update(id, userRole);
  }
}
