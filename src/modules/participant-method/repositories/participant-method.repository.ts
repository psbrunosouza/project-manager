import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma/services/prisma.service';
import { IParticipantMethodDTO } from '../dtos/participant-method.dto';

@Injectable()
export class ParticipantMethodRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: IParticipantMethodDTO): Promise<IParticipantMethodDTO> {
    return this.prismaService.participantMethod.create({ data });
  }

  update(
    id: number,
    data: IParticipantMethodDTO,
  ): Promise<IParticipantMethodDTO> {
    return this.prismaService.participantMethod.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.participantMethod.delete({ where: { id } });
  }

  list(): Promise<IParticipantMethodDTO[]> {
    return this.prismaService.participantMethod.findMany();
  }

  findById(id: number): Promise<IParticipantMethodDTO> {
    return this.prismaService.participantMethod.findUnique({ where: { id } });
  }
}
