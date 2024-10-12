import { ConflictException, Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repositories/project.repository';
import { IProjectDTO } from './../dtos/project.dto';

@Injectable()
export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  async create(data: IProjectDTO): Promise<IProjectDTO> {
    const hasProjectName = await this.checkProjectName(data.name);

    if (hasProjectName) {
      throw new ConflictException('Project name already exists');
    }

    return this.projectRepository.create(data);
  }

  list(): Promise<IProjectDTO[]> {
    return this.projectRepository.list();
  }

  async update(id: number, data: IProjectDTO): Promise<IProjectDTO> {
    const project = await this.findById(id);

    if (!project) {
      throw new ConflictException('Project not found');
    }

    const hasProjectName = await this.checkProjectName(data.name);

    if (hasProjectName) {
      throw new ConflictException('Project name already exists');
    }

    return this.projectRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    const project = await this.findById(id);

    if (!project) {
      throw new ConflictException('Project not found');
    }

    return this.projectRepository.delete(id);
  }

  findById(id: number): Promise<IProjectDTO> {
    return this.projectRepository.findById(id);
  }

  checkProjectName(name: string): Promise<boolean> {
    return this.projectRepository.checkProjectName(name);
  }
}
