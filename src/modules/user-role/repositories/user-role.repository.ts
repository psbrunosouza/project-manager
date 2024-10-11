import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { IUserRoleDTO } from '../dtos/user-role.dto';

@Injectable()
export class UserRoleRepository {
  constructor(private prismaService: PrismaService) {}

  create(userRole: IUserRoleDTO): Promise<IUserRoleDTO> {
    return this.prismaService.userRole.create({
      data: {
        ...userRole,
        methods: {
          connect: userRole.methods,
        },
      },
      include: { methods: true },
    });
  }

  update(id: number, userRole: IUserRoleDTO): Promise<IUserRoleDTO> {
    return this.prismaService.userRole.update({
      where: { id },
      data: {
        ...userRole,
        methods: {
          set: userRole.methods,
        },
      },
      include: { methods: true },
    });
  }

  list(): Promise<IUserRoleDTO[]> {
    return this.prismaService.userRole.findMany({
      include: { methods: true },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.userRole.delete({ where: { id } });
  }

  findById(id: number): Promise<IUserRoleDTO> {
    return this.prismaService.userRole.findUnique({
      where: { id },
      include: { methods: true },
    });
  }
}
