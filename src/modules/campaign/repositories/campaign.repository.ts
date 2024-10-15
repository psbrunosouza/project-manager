import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma/services/prisma.service';
import { ICampaignDTO } from '../dtos/campaign.dto';

@Injectable()
export class CampaignRepository {
  constructor(private prismaService: PrismaService) {}

  create(campaign: ICampaignDTO): Promise<ICampaignDTO> {
    return this.prismaService.campaign.create({
      data: {
        name: campaign.name,
        description: campaign.description,
        cover: campaign.cover,
        Project: {
          connect: { id: campaign.project.id },
        },
      },
      include: { Project: true },
    });
  }

  update(id: number, campaign: ICampaignDTO): Promise<ICampaignDTO> {
    return this.prismaService.campaign.update({
      where: { id },
      data: {
        name: campaign.name,
        description: campaign.description,
        cover: campaign.cover,
        Project: {
          connect: { id: campaign.project.id },
        },
      },
      include: { Project: true },
    });
  }

  list(): Promise<ICampaignDTO[]> {
    return this.prismaService.campaign.findMany({
      include: { Project: true },
    });
  }

  findById(id: number): Promise<ICampaignDTO> {
    return this.prismaService.campaign.findUnique({
      where: { id },
      include: { Project: true },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.campaign.delete({ where: { id } });
  }
}
