import { UserOnTeam } from '@prisma/client';
import { IsOptional } from 'class-validator';
import { IParticipantRoleDTO } from 'src/modules/participant-role/dtos/participant-role.dto';
import { IProjectDTO } from 'src/modules/project/dtos/project.dto';
import { IUserDTO } from 'src/modules/user/dtos/user.dto';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class ITeamDTO extends IDefaultDTO {
  @IsOptional()
  projects?: IProjectDTO[];

  @IsOptional()
  users?: IUserDTO[];

  @IsOptional()
  roles?: IParticipantRoleDTO[];

  @IsOptional()
  usersOnTeams?: UserOnTeam[];
}
