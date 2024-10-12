import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IMethodDTO } from 'src/modules/method/dtos/method.dto';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IRoleDTO extends IDefaultDTO {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  methods?: IMethodDTO[];
}
