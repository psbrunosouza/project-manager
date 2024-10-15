import { Injectable } from '@nestjs/common';
import { IParticipantRoleDTO } from '../dtos/participant-role.dto';
import { ParticipantRoleRepository } from '../repositories/participant-role.repository';

@Injectable()
export class ParticipantRoleService {
  constructor(private participantRoleRepository: ParticipantRoleRepository) {}

  create(data: IParticipantRoleDTO): Promise<IParticipantRoleDTO> {
    return this.participantRoleRepository.create(data);
  }

  update(id: number, data: IParticipantRoleDTO): Promise<IParticipantRoleDTO> {
    return this.participantRoleRepository.update(id, data);
  }

  list(): Promise<IParticipantRoleDTO[]> {
    return this.participantRoleRepository.list();
  }

  findById(id: number): Promise<IParticipantRoleDTO> {
    return this.participantRoleRepository.findById(id);
  }

  delete(id: number): Promise<void> {
    return this.participantRoleRepository.delete(id);
  }
}
