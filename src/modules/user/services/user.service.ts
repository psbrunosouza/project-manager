import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUserDTO } from '../dtos/user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: IUserDTO): Promise<IUserDTO> {
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

  async update(id: number, data: IUserDTO): Promise<IUserDTO> {
    const existingUser = await this.findById(id);

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    return this.userRepository.update(id, data);
  }

  list(): Promise<Omit<IUserDTO, 'password'>[]> {
    return this.userRepository.list();
  }

  findByEmail(email: string): Promise<IUserDTO> {
    const user = this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  findById(id: number): Promise<Omit<IUserDTO, 'password'>> {
    const user = this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
