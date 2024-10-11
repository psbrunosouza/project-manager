import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { UserRoleMethodModule } from './modules/user-role-method/user-role-method.module';
import { UserRoleModule } from './modules/user-role/user-role.module';
import { UserModule } from './modules/user/user.module';
import { PrismaExceptionFilter } from './shared/filters/http-exception.filter';

@Module({
  imports: [
    UserModule,
    AuthModule,
    UserRoleModule,
    UserRoleMethodModule,
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
