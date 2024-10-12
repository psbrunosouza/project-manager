import { Injectable, NotFoundException } from '@nestjs/common';
import { IRoleDTO } from '../dtos/role.dto';
import { UserRoleRepository } from '../repositories/role.repository';

@Injectable()
export class UserRoleService {
  constructor(private userRoleRepository: UserRoleRepository) {}

  create(userRole: IRoleDTO): Promise<IRoleDTO> {
    return this.userRoleRepository.create(userRole);
  }

  list(): Promise<IRoleDTO[]> {
    return this.userRoleRepository.list();
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);

    return this.userRoleRepository.delete(id);
  }

  async update(id: number, userRole: IRoleDTO): Promise<IRoleDTO> {
    await this.findById(id);

    return this.userRoleRepository.update(id, userRole);
  }

  async findById(id: number): Promise<IRoleDTO> {
    const role = await this.userRoleRepository.findById(id);

    if (!role) {
      throw new NotFoundException('Perfil não encontrado');
    }

    return role;
  }
}
