import { Injectable, NotFoundException } from '@nestjs/common';
import { IMethodDTO } from '../dtos/method.dto';
import { MethodRepository } from '../repositories/method.repository';

@Injectable()
export class MethodService {
  constructor(private methodRepository: MethodRepository) {}

  async list(): Promise<IMethodDTO[]> {
    return this.methodRepository.list();
  }

  async findById(id: number): Promise<IMethodDTO> {
    const method = await this.methodRepository.findById(id);

    if (!method) {
      throw new NotFoundException('Método não encontrado');
    }

    return method;
  }

  async create(data: IMethodDTO): Promise<IMethodDTO> {
    return this.methodRepository.create(data);
  }

  async update(id: number, data: IMethodDTO): Promise<IMethodDTO> {
    await this.findById(id);

    return this.methodRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);

    await this.methodRepository.delete(id);
  }
}
