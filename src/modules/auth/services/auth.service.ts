import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/modules/user/services/user.service';
import { IAccountDTO } from '../dtos/account.dto';
import { ITokenDTO } from '../dtos/token.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async singIn({ email, password }: IAccountDTO): Promise<ITokenDTO> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Credenciais Inválidas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais Inválidas');
    }

    const payload = { sub: user.id, username: user.name };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
