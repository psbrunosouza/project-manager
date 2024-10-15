import { Injectable } from '@nestjs/common';
import { excludeFieldHelper } from 'src/shared/helpers/exclude-field.helper';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class RemovePasswordMiddlewareService {
  constructor(private readonly prismaService: PrismaService) {}

  use(req: Request, res: Response, next: () => void) {
    this.prismaService.$use(async (params, next) => {
      const result = await next(params);

      params.model === 'User';

      if (result === null || result === undefined) {
        return;
      }

      if (Array.isArray(result)) {
        return result.map((item) => excludeFieldHelper(item, ['password']));
      }

      return excludeFieldHelper(result, ['password']);
    });

    next();
  }
}
