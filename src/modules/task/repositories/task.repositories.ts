import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma/services/prisma.service';
import { ITaskDTO } from '../dtos/task.dto';

@Injectable()
export class TaskRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: ITaskDTO): Promise<ITaskDTO> {
    return this.prismaService.task.create({
      data: {
        name: data.name,
        description: data.description,
        campaign: {
          connect: { id: data.campaign.id },
        },
      },
      include: { campaign: true },
    });
  }

  update(id: number, data: ITaskDTO): Promise<ITaskDTO> {
    return this.prismaService.task.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        campaign: {
          connect: { id: data.campaign.id },
        },
      },
      include: { campaign: true },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.task.delete({
      where: { id },
    });
  }

  async findById(id: number): Promise<ITaskDTO> {
    return this.prismaService.task.findUnique({
      where: { id },
      include: { campaign: true },
    });
  }

  async list(): Promise<ITaskDTO[]> {
    return this.prismaService.task.findMany({
      include: { campaign: true },
    });
  }
}
