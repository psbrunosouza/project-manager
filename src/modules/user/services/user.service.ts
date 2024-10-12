import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { excludeFieldHelper } from 'src/shared/helpers/exclude-field.helper';
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

    return excludeFieldHelper<IUserDTO, 'password'>(
      await this.userRepository.create({
        ...data,
        password: hash,
      }),
      ['password'],
    ) as IUserDTO;
  }

  async update(id: number, data: IUpdateUserDTO): Promise<IUserDTO> {
    const existingUser = await this.findById(id);

    if (!existingUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return excludeFieldHelper<IUserDTO, 'password'>(
      await this.userRepository.update(id, data),
      ['password'],
    ) as IUserDTO;
  }

  async list(): Promise<IUserDTO[]> {
    return (await this.userRepository.list()).map((user) => {
      return excludeFieldHelper<IUserDTO, 'password'>(user, ['password']);
    }) as IUserDTO[];
  }

  async findByEmail(email: string): Promise<IUserDTO> {
    const user = this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async findById(id: number): Promise<IUserDTO> {
    const user = excludeFieldHelper<IUserDTO, 'password'>(
      await this.userRepository.findById(id),
      ['password'],
    ) as IUserDTO;

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}
