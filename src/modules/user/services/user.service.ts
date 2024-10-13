import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ICreateUserDTO } from '../dtos/create-user.dto';
import { IUpdateUserDTO } from '../dtos/update-user.dto';
import { IUserDTO } from '../dtos/user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: ICreateUserDTO): Promise<ICreateUserDTO> {
    const hash = await bcrypt.hash(
      data.password,
      Number(process.env.HASH_PASSWORD_SALTS),
    );

    const existingUser = await this.findByEmail(data.email);

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    return this.userRepository.create({
      ...data,
      password: hash,
    });
  }

  async update(id: number, data: IUpdateUserDTO): Promise<IUserDTO> {
    const existingUser = await this.findById(id);

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    return this.userRepository.update(id, data);
  }

  list(): Promise<IUserDTO[]> {
    return this.userRepository.list();
  }

  findByEmail(email: string): Promise<IUserDTO> {
    const user = this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  findById(id: number): Promise<IUserDTO> {
    const user = this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
