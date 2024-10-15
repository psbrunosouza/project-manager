import { UserOnTeam } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IParticipantRoleDTO extends IDefaultDTO {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  methods?: any[];

  @IsOptional()
  usersOnTeams?: UserOnTeam[];
}
