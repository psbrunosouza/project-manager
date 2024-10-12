import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { MethodModule } from './modules/method/method.module';
import { UserRoleModule } from './modules/role/role.module';
import { UserModule } from './modules/user/user.module';
import { SeedCommand } from './shared/commands/seed.command';
import { SeedService } from './shared/databases/seeders/seed.service';
import { PrismaExceptionFilter } from './shared/filters/http-exception.filter';
import { PrismaService } from './shared/services/prisma.service';

@Module({
  imports: [
    UserModule,
    AuthModule,
    UserRoleModule,
    MethodModule,

    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
      global: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    SeedCommand,
    SeedService,
    PrismaService,
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
