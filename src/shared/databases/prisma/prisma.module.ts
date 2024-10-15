import { Global, Module } from '@nestjs/common';
import { RemovePasswordMiddlewareService } from './middlewares/remove-password-middleware.service';
import { PrismaService } from './services/prisma.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, RemovePasswordMiddlewareService],
  exports: [PrismaService],
})
export class PrismaModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(RemovePasswordMiddlewareService).forRoutes('*');
  // }
}
