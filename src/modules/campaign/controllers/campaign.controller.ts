import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ICampaignDTO } from '../dtos/campaign.dto';
import { CampaignService } from '../services/campaign.service';

@Controller('campaigns')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Post()
  async create(@Body() campaign: ICampaignDTO): Promise<ICampaignDTO> {
    try {
      return await this.campaignService.create(campaign);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async list(): Promise<ICampaignDTO[]> {
    try {
      return await this.campaignService.list();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.campaignService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.campaignService.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ICampaignDTO,
  ) {
    try {
      return await this.campaignService.update(id, data);
    } catch (error) {
      throw error;
    }
  }
}
