import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { IProjectDTO } from 'src/modules/project/dtos/project.dto';
import { IDefaultProcessDTO } from 'src/shared/dtos/default.dto';

export class ICampaignDTO extends IDefaultProcessDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  cover: string;

  @IsOptional()
  tasks?: any[];

  @IsOptional()
  @IsNumber()
  projectId?: number;

  @IsOptional()
  project?: IProjectDTO;
}
