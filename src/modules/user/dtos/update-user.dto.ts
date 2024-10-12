import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IRoleDTO } from 'src/modules/role/dtos/role.dto';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IUpdateUserDTO extends IDefaultDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsOptional()
  role?: IRoleDTO;

  @IsOptional()
  roleId?: number;
}
