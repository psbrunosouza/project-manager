import { IDefaultDTO } from 'src/shared/dtos/default.dto';

export interface IUserDTO extends IDefaultDTO {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
