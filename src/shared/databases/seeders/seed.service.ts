import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class SeedService {
  constructor(private prismaService: PrismaService) {}

  async admin() {
    const hash = await bcrypt.hash(
      'theadmin123',
      Number(process.env.HASH_PASSWORD_SALTS),
    );

    return this.prismaService.user.create({
      data: {
        name: 'Bruno',
        email: 'psbrunosouza@gmail.com',
        password: hash,
        role: {
          create: {
            description: 'Admin',
            methods: {
              create: [
                {
                  code: 'CREATE',
                  description: 'Can CREATE a new resource',
                },
                {
                  code: 'READ',
                  description: 'Can READ a resource',
                },
                {
                  code: 'UPDATE',
                  description: 'Can UPDATE a resource',
                },
                {
                  code: 'DELETE',
                  description: 'Can DELETE a resource',
                },
              ],
            },
          },
        },
      },
    });
  }
}
