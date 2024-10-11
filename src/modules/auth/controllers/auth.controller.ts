import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PublicAccess } from 'src/shared/decorators/public-access.decorator';
import { IAccountDTO } from '../dtos/account.dto';
import { ITokenDTO } from '../dtos/token.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @PublicAccess()
  @Post()
  async login(@Body() account: IAccountDTO): Promise<ITokenDTO> {
    return await this.authService.singIn(account);
  }
}
