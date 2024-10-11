import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { IUserRoleMethodDTO } from '../dtos/user-role-method.dto';

@Injectable()
export class UserRoleMethodRepository {
  constructor(private prismaService: PrismaService) {}

  create(userRoleMethod: IUserRoleMethodDTO): Promise<IUserRoleMethodDTO> {
    return this.prismaService.userRoleMethod.create({
      data: userRoleMethod,
      include: { UserRole: true },
    });
  }

  list(): Promise<IUserRoleMethodDTO[]> {
    return this.prismaService.userRoleMethod.findMany({
      include: { UserRole: true },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.userRoleMethod.delete({ where: { id } });
  }

  update(
    id: number,
    userRoleMethod: IUserRoleMethodDTO,
  ): Promise<IUserRoleMethodDTO> {
    return this.prismaService.userRoleMethod.update({
      where: { id },
      data: userRoleMethod,
      include: { UserRole: true },
    });
  }

  findById(id: number): Promise<IUserRoleMethodDTO> {
    return this.prismaService.userRoleMethod.findUnique({
      where: { id },
      include: { UserRole: true },
    });
  }
}
