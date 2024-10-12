import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { MethodController } from './controllers/method.controller';
import { MethodRepository } from './repositories/method.repository';
import { MethodService } from './services/method.service';

@Module({
  imports: [],
  controllers: [MethodController],
  providers: [MethodService, MethodRepository, PrismaService],
  exports: [],
})
export class MethodModule {}
