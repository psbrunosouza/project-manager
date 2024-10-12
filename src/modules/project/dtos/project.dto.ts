import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IProjectDTO extends IDefaultDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  cover?: string;

  teams?: any;
}
