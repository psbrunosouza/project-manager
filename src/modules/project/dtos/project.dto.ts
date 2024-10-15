import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ICampaignDTO } from 'src/modules/campaign/dtos/campaign.dto';
import { ITeamDTO } from 'src/modules/team/dtos/team.dto';
import { IDefaultProcessDTO } from 'src/shared/dtos/default.dto';

export class IProjectDTO extends IDefaultProcessDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  cover?: string;

  @IsOptional()
  campaigns?: ICampaignDTO[];

  @IsOptional()
  teams?: ITeamDTO[];
}
