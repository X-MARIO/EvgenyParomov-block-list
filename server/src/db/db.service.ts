import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class DbService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }
}
