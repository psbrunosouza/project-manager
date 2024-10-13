import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma/services/prisma.service';
import { ITeamDTO } from '../dtos/team.dto';

@Injectable()
export class TeamRepository {
  constructor(private prismaService: PrismaService) {}

  async list(): Promise<ITeamDTO[]> {
    const teams = await this.prismaService.team.findMany({
      include: {
        usersOnTeams: {
          include: {
            user: true,
            role: true,
          },
        },
      },
    });

    return teams.map((team) => ({
      ...team,
      users: team?.usersOnTeams?.map((userOnTeam) => ({
        ...userOnTeam.user,
      })),
      roles: team?.usersOnTeams?.map((userOnTeam) => userOnTeam.role),
      usersOnTeams: undefined,
    }));
  }

  async create(data: ITeamDTO): Promise<ITeamDTO> {
    const team = await this.prismaService.team.create({
      data: {
        usersOnTeams: {
          create: data.users.map((user) => ({
            user: {
              connect: { id: user.id },
            },
          })),
        },
      },
      include: {
        usersOnTeams: {
          include: {
            user: true,
            role: true,
          },
        },
      },
    });

    return {
      ...team,
      users: team?.usersOnTeams?.map((userOnTeam) => ({
        ...userOnTeam.user,
      })),
      roles: team?.usersOnTeams?.map((userOnTeam) => userOnTeam.role),
      usersOnTeams: undefined,
    };
  }

  async update(id: number, data: ITeamDTO): Promise<ITeamDTO> {
    const team = await this.prismaService.team.update({
      where: { id },
      data: {
        usersOnTeams: {
          set: data.users.map((user) => ({
            userId_teamId: {
              userId: user.id,
              teamId: id,
            },
          })),
        },
      },
      include: {
        usersOnTeams: {
          include: {
            user: true,
            role: true,
          },
        },
      },
    });

    return {
      ...team,
      users: team?.usersOnTeams?.map((userOnTeam) => ({
        ...userOnTeam.user,
      })),
      roles: team?.usersOnTeams?.map((userOnTeam) => userOnTeam.role),
      usersOnTeams: undefined,
    };
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.team.delete({ where: { id } });
  }

  async findById(id: number): Promise<ITeamDTO> {
    const team = await this.prismaService.team.findUnique({
      where: { id },
      include: {
        usersOnTeams: {
          include: {
            user: true,
            role: true,
          },
        },
      },
    });

    return {
      ...team,
      users: team?.usersOnTeams?.map((userOnTeam) => ({
        ...userOnTeam.user,
      })),
      roles: team?.usersOnTeams?.map((userOnTeam) => userOnTeam.role),
      usersOnTeams: undefined,
    };
  }
}
