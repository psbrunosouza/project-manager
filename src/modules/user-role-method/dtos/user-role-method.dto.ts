import { IsNotEmpty, IsString } from 'class-validator';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IUserRoleMethodDTO extends IDefaultDTO {
  @IsString()
  @IsNotEmpty()
  description: string;
}
