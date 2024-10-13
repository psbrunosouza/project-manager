import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma/services/prisma.service';
import { IMethodDTO } from '../dtos/method.dto';

@Injectable()
export class MethodRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: IMethodDTO): Promise<IMethodDTO> {
    return this.prismaService.method.create({
      data: {
        code: data.code,
        description: data.description,
      },
    });
  }

  update(id: number, data: IMethodDTO): Promise<IMethodDTO> {
    return this.prismaService.method.update({
      where: { id },
      data: {
        code: data.code,
        description: data.description,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.method.delete({ where: { id } });
  }

  list(): Promise<IMethodDTO[]> {
    return this.prismaService.method.findMany();
  }

  findById(id: number): Promise<IMethodDTO> {
    return this.prismaService.method.findUnique({
      where: { id },
    });
  }
}
