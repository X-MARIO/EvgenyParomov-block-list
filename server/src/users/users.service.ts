import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AccountService } from '../account/account.service';
import { BlockListService } from '../block-list/block-list.service';

@Injectable()
export class UsersService {
  public constructor(
    private readonly db: DbService,
    private readonly accountService: AccountService,
    private readonly blockListService: BlockListService,
  ) {}

  public async findByEmail(email: string) {
    return await this.db.user.findFirst({ where: { email } });
  }

  public async create(email: string, hash: string, salt: string) {
    const user = await this.db.user.create({ data: { email, hash, salt } });
    await this.accountService.create(user.id);
    await this.blockListService.create(user.id);
    return user;
  }
}
