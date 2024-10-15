import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma/services/prisma.service';
import { IUserDTO } from '../dtos/user.dto';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: IUserDTO): Promise<IUserDTO> {
    return this.prismaService.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        avatar: data.avatar,
        role: {
          connect: { id: data.roleId },
        },
      },
      include: {
        role: {
          include: { methods: true },
        },
      },
    });
  }

  update(id: number, data: IUserDTO): Promise<IUserDTO> {
    return this.prismaService.user.update({
      where: { id },
      data: {
        name: data.name,
        avatar: data.avatar,
        role: {
          connect: { id: data.roleId },
        },
      },
      include: {
        role: {
          include: { methods: true },
        },
      },
    });
  }

  findByEmail(email: string): Promise<IUserDTO> {
    return this.prismaService.user.findUnique({
      where: { email },
      include: {
        role: {
          include: { methods: true },
        },
      },
    });
  }

  findById(id: number): Promise<Omit<IUserDTO, 'password'>> {
    return this.prismaService.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
      include: {
        role: {
          include: { methods: true },
        },
      },
    });
  }

  list(): Promise<Omit<IUserDTO, 'password'>[]> {
    return this.prismaService.user.findMany({
      include: {
        role: {
          include: { methods: true },
        },
      },
    });
  }
}
