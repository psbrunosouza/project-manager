import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/modules/prisma/services/prisma.service';
import { IProjectDTO } from './../dtos/project.dto';

@Injectable()
export class ProjectRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: IProjectDTO): Promise<IProjectDTO> {
    return this.prismaService.project.create({
      data: {
        ...data,
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
        ...data,
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
      include: { teams: true, campaigns: true },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.project.delete({ where: { id } });
  }

  async checkProjectName(name: string): Promise<boolean> {
    return !!(await this.prismaService.project.findFirst({ where: { name } }));
  }
}
