import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ICampaignDTO } from 'src/modules/campaign/dtos/campaign.dto';
import { IDefaultProcessDTO } from 'src/shared/dtos/default.dto';

export class ITaskDTO extends IDefaultProcessDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  campaign?: ICampaignDTO;

  @IsOptional()
  campaignId?: number;
}
