import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUserDTO } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: IUserDTO): Promise<Omit<IUserDTO, 'password'>> {
    const hash = await bcrypt.hash(
      data.password,
      Number(process.env.HASH_PASSWORD_SALTS),
    );

    const existingUser = await this.findByEmail(data.email);

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.userRepository.create({
      ...data,
      password: hash,
    });

    return user;
  }

  list(): Promise<IUserDTO[]> {
    return this.userRepository.list();
  }

  findByEmail(email: string): Promise<IUserDTO> {
    return this.userRepository.findByEmail(email);
  }

  findById(id: number): Promise<IUserDTO> {
    return this.userRepository.findById(id);
  }
}
