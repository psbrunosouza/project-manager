import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/modules/prisma/services/prisma.service';

@Injectable()
export class ProjectRepository {
  constructor(private prismaService: PrismaService) {}
}
