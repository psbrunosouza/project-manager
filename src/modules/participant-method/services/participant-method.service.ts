import { Injectable } from '@nestjs/common';
import { IParticipantMethodDTO } from '../dtos/participant-method.dto';
import { ParticipantMethodRepository } from '../repositories/participant-method.repository';

@Injectable()
export class ParticipantMethodService {
  constructor(
    private participantMethodRepository: ParticipantMethodRepository,
  ) {}

  create(data: IParticipantMethodDTO): Promise<IParticipantMethodDTO> {
    return this.participantMethodRepository.create(data);
  }

  update(
    id: number,
    data: IParticipantMethodDTO,
  ): Promise<IParticipantMethodDTO> {
    return this.participantMethodRepository.update(id, data);
  }

  delete(id: number): Promise<void> {
    return this.participantMethodRepository.delete(id);
  }

  list(): Promise<IParticipantMethodDTO[]> {
    return this.participantMethodRepository.list();
  }

  findById(id: number): Promise<IParticipantMethodDTO> {
    return this.participantMethodRepository.findById(id);
  }
}
