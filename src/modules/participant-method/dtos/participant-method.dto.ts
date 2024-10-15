import { IsNotEmpty, IsString } from 'class-validator';
import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export class IParticipantMethodDTO extends IDefaultDTO {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
