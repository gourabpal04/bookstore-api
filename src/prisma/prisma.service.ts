import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {

  async onModuleInit() {
    await this.$connect();
    console.log('[PrismaService] Database connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('[PrismaService] Database disconnected');
  }

  cleanDatabase() {
    return this.$transaction([
      this.book.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
