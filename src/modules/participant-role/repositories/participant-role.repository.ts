import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma/services/prisma.service';
import { IParticipantRoleDTO } from '../dtos/participant-role.dto';

@Injectable()
export class ParticipantRoleRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: IParticipantRoleDTO): Promise<IParticipantRoleDTO> {
    return this.prismaService.participantRole.create({
      data: {
        description: data.description,
        methods: {
          connect: data?.methods?.map((method) => ({
            id: method.id,
          })),
        },
      },
      include: {
        methods: true,
      },
    });
  }

  update(id: number, data: IParticipantRoleDTO): Promise<IParticipantRoleDTO> {
    return this.prismaService.participantRole.update({
      where: { id },
      data: {
        description: data.description,
        methods: {
          set: data?.methods?.map((method) => ({
            id: method.id,
          })),
        },
      },
      include: {
        methods: true,
      },
    });
  }

  list(): Promise<IParticipantRoleDTO[]> {
    return this.prismaService.participantRole.findMany({
      include: {
        methods: true,
      },
    });
  }

  findById(id: number): Promise<IParticipantRoleDTO> {
    return this.prismaService.participantRole.findUnique({
      where: { id },
      include: {
        methods: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.participantRole.delete({
      where: { id },
      include: {
        methods: true,
      },
    });
  }
}
