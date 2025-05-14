import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';

import { PrismaClient } from '../generated/prisma';
import { DbService } from './db/db.service';

const prisma = new PrismaClient();

class HelloWorldDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DbService,
  ) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  public async getHello(): Promise<HelloWorldDto> {
    const users = await this.dbService.user.findMany({});
    console.log('>> users', users);
    return {
      message: this.appService.getHello(),
    };
  }
}
