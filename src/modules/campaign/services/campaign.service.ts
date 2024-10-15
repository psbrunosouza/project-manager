import { Injectable, NotFoundException } from '@nestjs/common';
import { ICampaignDTO } from '../dtos/campaign.dto';
import { CampaignRepository } from '../repositories/campaign.repository';

@Injectable()
export class CampaignService {
  constructor(private campaignRepository: CampaignRepository) {}

  create(campaign: ICampaignDTO): Promise<ICampaignDTO> {
    return this.campaignRepository.create(campaign);
  }

  async update(id: number, campaign: ICampaignDTO): Promise<ICampaignDTO> {
    await this.findById(id);

    return this.campaignRepository.update(id, campaign);
  }

  list(): Promise<ICampaignDTO[]> {
    return this.campaignRepository.list();
  }

  async findById(id: number): Promise<ICampaignDTO> {
    const campaign = await this.campaignRepository.findById(id);

    if (!campaign) {
      throw new NotFoundException('Campaign not found');
    }

    return campaign;
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);

    return this.campaignRepository.delete(id);
  }
}
