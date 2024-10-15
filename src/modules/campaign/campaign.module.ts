import { Module } from '@nestjs/common';
import { CampaignRepository } from './repositories/campaign.repository';
import { CampaignService } from './services/campaign.service';
import { CampaignController } from './controllers/campaign.controller';

@Module({
  providers: [CampaignRepository, CampaignService],
  controllers: [CampaignController],
})
export class CampaignModule {}
