import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { CampaignModule } from './modules/campaign/campaign.module';
import { MethodModule } from './modules/method/method.module';
import { ParticipantMethodModule } from './modules/participant-method/participant-method.module';
import { ParticipantRoleModule } from './modules/participant-role/participant-role.module';
import { ProjectModule } from './modules/project/project.module';
import { UserRoleModule } from './modules/role/role.module';
import { TaskModule } from './modules/task/task.module';
import { TeamModule } from './modules/team/team.module';
import { UserModule } from './modules/user/user.module';
import { SeedCommand } from './shared/commands/seed.command';
import { PrismaModule } from './shared/databases/prisma/prisma.module';
import { SeedService } from './shared/databases/seeders/seed.service';
import { PrismaExceptionFilter } from './shared/filters/http-exception.filter';

@Module({
  imports: [
    UserModule,
    AuthModule,
    UserRoleModule,
    MethodModule,
    ProjectModule,
    PrismaModule,
    ProjectModule,
    TeamModule,
    ParticipantMethodModule,
    ParticipantRoleModule,
    CampaignModule,
    TaskModule,
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
