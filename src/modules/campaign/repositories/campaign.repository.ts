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
        project: {
          connect: { id: campaign.project.id },
        },
      },
      include: { project: true },
    });
  }

  update(id: number, campaign: ICampaignDTO): Promise<ICampaignDTO> {
    return this.prismaService.campaign.update({
      where: { id },
      data: {
        name: campaign.name,
        description: campaign.description,
        cover: campaign.cover,
        project: {
          connect: { id: campaign.project.id },
        },
      },
      include: { project: true },
    });
  }

  list(): Promise<ICampaignDTO[]> {
    return this.prismaService.campaign.findMany({
      include: { project: true },
    });
  }

  findById(id: number): Promise<ICampaignDTO> {
    return this.prismaService.campaign.findUnique({
      where: { id },
      include: { project: true },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.campaign.delete({ where: { id } });
  }
}
