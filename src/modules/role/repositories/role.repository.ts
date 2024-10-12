import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { IRoleDTO } from '../dtos/role.dto';

@Injectable()
export class UserRoleRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: IRoleDTO): Promise<IRoleDTO> {
    return this.prismaService.role.create({
      data: {
        ...data,
        methods: {
          connect: data.methods.map((method) => ({ id: method.id })),
        },
      },
      include: {
        methods: true,
      },
    });
  }

  async update(id: number, userRole: any): Promise<IRoleDTO> {
    return await this.prismaService.role.update({
      where: { id },
      data: {
        ...userRole,
        methods: {
          set: userRole.methods.map((method) => ({ id: method.id })),
        },
      },
      include: {
        methods: true,
      },
    });
  }

  list(): Promise<IRoleDTO[]> {
    return this.prismaService.role.findMany({
      include: {
        methods: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.role.delete({ where: { id } });
  }

  findById(id: number): Promise<IRoleDTO> {
    return this.prismaService.role.findUnique({
      where: { id },
      include: {
        methods: true,
      },
    });
  }
}
