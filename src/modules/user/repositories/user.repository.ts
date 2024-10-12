import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/services/prisma.service';
import { ICreateUserDTO } from '../dtos/create-user.dto';
import { IUpdateUserDTO } from '../dtos/update-user.dto';
import { IUserDTO } from '../dtos/user.dto';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: ICreateUserDTO): Promise<ICreateUserDTO> {
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

  update(id: number, data: IUpdateUserDTO): Promise<IUserDTO> {
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

  findById(id: number): Promise<IUserDTO> {
    return this.prismaService.user.findUnique({
      where: { id },
      include: {
        role: {
          include: { methods: true },
        },
      },
    });
  }

  list(): Promise<IUserDTO[]> {
    return this.prismaService.user.findMany({
      include: {
        role: {
          include: { methods: true },
        },
      },
    });
  }
}
