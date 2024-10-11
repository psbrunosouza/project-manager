import { IsNotEmpty, IsString } from 'class-validator';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IUserRoleDTO extends IDefaultDTO {
  @IsString()
  @IsNotEmpty()
  description: string;
}
