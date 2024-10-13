import { Injectable, NotFoundException } from '@nestjs/common';
import { ITeamDTO } from '../dtos/team.dto';
import { TeamRepository } from './../repositories/team.repository';

@Injectable()
export class TeamService {
  constructor(private teamRepository: TeamRepository) {}
  create(data: ITeamDTO): Promise<ITeamDTO> {
    return this.teamRepository.create(data);
  }

  async update(id: number, data: ITeamDTO): Promise<ITeamDTO> {
    await this.findById(id);

    return this.teamRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);

    return this.teamRepository.delete(id);
  }

  async findById(id: number): Promise<ITeamDTO> {
    const team = await this.teamRepository.findById(id);

    if (!team) {
      throw new NotFoundException('Team not found');
    }

    return this.teamRepository.findById(id);
  }

  list(): Promise<ITeamDTO[]> {
    return this.teamRepository.list();
  }
}
