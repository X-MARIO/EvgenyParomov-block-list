import { Injectable } from '@nestjs/common';
import { AccountDto, PatchAccountDto } from './dto';
import { DbService } from '../db/db.service';

@Injectable()
export class AccountService {
  public constructor(private readonly db: DbService) {}

  public async create(userId: number) {
    return this.db.account.create({
      data: {
        ownerId: userId,
        isBlockingEnabled: false,
      },
    });
  }

  public async getAccount(userId: number): Promise<AccountDto> {
    return await this.db.account.findFirstOrThrow({
      where: { ownerId: userId },
    });
  }

  public async patchAccount(
    userId: number,
    patch: PatchAccountDto,
  ): Promise<AccountDto> {
    return await this.db.account.update({
      where: { ownerId: userId },
      data: { ...patch },
    });
  }
}
