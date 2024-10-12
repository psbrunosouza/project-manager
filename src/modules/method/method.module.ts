import { Module } from '@nestjs/common';
import { MethodController } from './controllers/method.controller';
import { MethodRepository } from './repositories/method.repository';
import { MethodService } from './services/method.service';

@Module({
  imports: [],
  controllers: [MethodController],
  providers: [MethodService, MethodRepository],
  exports: [],
})
export class MethodModule {}
