import { Controller, Get } from '@nestjs/common';
import { IUserDTO } from './user.dto';

@Controller('users')
export class UserController {
  constructor() {}

  @Get()
  listUsers(): Promise<IUserDTO> {
    return null;
  }
}
