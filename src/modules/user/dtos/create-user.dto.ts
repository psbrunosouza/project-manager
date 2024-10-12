import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IRoleDTO } from 'src/modules/role/dtos/role.dto';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class ICreateUserDTO extends IDefaultDTO {
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

  @IsOptional()
  role?: IRoleDTO;

  @IsOptional()
  roleId?: number;
}
