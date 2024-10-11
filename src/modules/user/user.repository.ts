import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/services/prisma.service';
import { IUserDTO } from './dtos/user.dto';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: IUserDTO): Promise<IUserDTO> {
    return this.prismaService.user.create({ data });
  }

  findByEmail(email: string): Promise<IUserDTO> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  findById(id: number): Promise<IUserDTO> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  list(): Promise<IUserDTO[]> {
    return this.prismaService.user.findMany();
  }
}
