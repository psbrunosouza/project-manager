import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PublicAccess } from 'src/shared/decorators/public-access.decorator';
import { AuthService } from './auth.service';
import { AccountDTO } from './dtos/account.dto';
import { TokenDTO } from './dtos/token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @PublicAccess()
  @Post()
  async login(@Body() account: AccountDTO): Promise<TokenDTO> {
    return await this.authService.singIn(account);
  }
}
