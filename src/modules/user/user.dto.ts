import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IUserDTO extends IDefaultDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  avatar: string;
}
