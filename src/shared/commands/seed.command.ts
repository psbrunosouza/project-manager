import { Command, CommandRunner } from 'nest-commander';
import { SeedService } from '../databases/seeders/seed.service';

@Command({ name: 'start:seed', description: 'Seed database' })
export class SeedCommand extends CommandRunner {
  constructor(private readonly seedService: SeedService) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(passedParams: string[]): Promise<void> {
    await this.seedService.admin();
  }
}
