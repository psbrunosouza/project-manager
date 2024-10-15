import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma/services/prisma.service';
import { IProjectDTO } from './../dtos/project.dto';

@Injectable()
export class ProjectRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: IProjectDTO): Promise<IProjectDTO> {
    return this.prismaService.project.create({
      data: {
        description: data.description,
        name: data.name,
        cover: data.cover,
        teams: {
          connect: data.teams && data.teams.map((team) => ({ id: team.id })),
        },
      },
      include: { teams: true, campaigns: true },
    });
  }

  update(id: number, data: IProjectDTO): Promise<IProjectDTO> {
    return this.prismaService.project.update({
      where: { id },
      data: {
        description: data.description,
        cover: data.cover,
        name: data.name,
        teams: {
          set: data.teams && data.teams.map((team) => ({ id: team.id })),
        },
      },
      include: { teams: true, campaigns: true },
    });
  }

  list(): Promise<IProjectDTO[]> {
    return this.prismaService.project.findMany({
      include: { teams: true, campaigns: true },
    });
  }

  findById(id: number): Promise<IProjectDTO> {
    return this.prismaService.project.findUnique({
      where: { id },
      include: { teams: { include: {} }, campaigns: true },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.project.delete({ where: { id } });
  }

  async checkProjectName(name: string): Promise<boolean> {
    return !!(await this.prismaService.project.findFirst({ where: { name } }));
  }
}
