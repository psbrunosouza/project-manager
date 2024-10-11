import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUserDTO } from './dtos/user.dto';
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

  async findByEmail(email: string): Promise<IUserDTO> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async findById(id: number): Promise<IUserDTO> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}
