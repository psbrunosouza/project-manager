import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
