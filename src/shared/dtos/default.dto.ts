import { IsOptional } from 'class-validator';

export class IDefaultDTO {
  @IsOptional()
  id?: number;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;

  @IsOptional()
  deletedAt?: Date;
}

export class IDefaultProcessDTO {
  @IsOptional()
  id?: number;

  @IsOptional()
  startedAt?: Date;

  @IsOptional()
  updatedAt?: Date;

  @IsOptional()
  deletedAt?: Date;

  @IsOptional()
  finishedAt?: Date;
}
