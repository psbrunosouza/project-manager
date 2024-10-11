import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserRoleDTO } from '../dtos/user-role.dto';
import { UserRoleRepository } from '../repositories/user-role.repository';

@Injectable()
export class UserRoleService {
  constructor(private userRoleRepository: UserRoleRepository) {}

  create(userRole: IUserRoleDTO): Promise<IUserRoleDTO> {
    return this.userRoleRepository.create(userRole);
  }

  list(): Promise<IUserRoleDTO[]> {
    return this.userRoleRepository.list();
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);

    return this.userRoleRepository.delete(id);
  }

  async update(id: number, userRole: IUserRoleDTO): Promise<IUserRoleDTO> {
    await this.findById(id);

    return this.userRoleRepository.update(id, userRole);
  }

  async findById(id: number): Promise<IUserRoleDTO> {
    const role = await this.userRoleRepository.findById(id);

    if (!role) {
      throw new NotFoundException('Perfil não encontrado');
    }

    return role;
  }
}
