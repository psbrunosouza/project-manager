import { IsNotEmpty, IsString } from 'class-validator';
import { IRoleDTO } from 'src/modules/role/dtos/role.dto';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IMethodDTO extends IDefaultDTO {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  roles?: IRoleDTO[];
}
