import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IUserRoleMethodDTO } from 'src/modules/user-role-method/dtos/user-role-method.dto';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IUserRoleDTO extends IDefaultDTO {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  methods?: IUserRoleMethodDTO[];
}
