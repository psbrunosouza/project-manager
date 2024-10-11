import { Injectable } from '@nestjs/common';
import { IUserRoleMethodDTO } from '../dtos/user-role-method.dto';
import { UserRoleMethodRepository } from './../repositories/user-role-method.repository';

@Injectable()
export class UserRoleMethodService {
  constructor(private userRoleMethodRepository: UserRoleMethodRepository) {}

  create(userRoleMethod: IUserRoleMethodDTO): Promise<IUserRoleMethodDTO> {
    return this.userRoleMethodRepository.create(userRoleMethod);
  }

  list(): Promise<IUserRoleMethodDTO[]> {
    return this.userRoleMethodRepository.list();
  }

  findById(id: number): Promise<IUserRoleMethodDTO> {
    return this.userRoleMethodRepository.findById(id);
  }

  update(
    id: number,
    userRoleMethodDTO: IUserRoleMethodDTO,
  ): Promise<IUserRoleMethodDTO> {
    return this.userRoleMethodRepository.update(id, userRoleMethodDTO);
  }

  delete(id: number): Promise<void> {
    return this.userRoleMethodRepository.delete(id);
  }
}
