import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class UsersService {
  public constructor(private readonly db: DbService) {}

  public findByEmail(email: string) {
    return this.db.user.findFirst({ where: { email } });
  }

  public create(email: string, hash: string, salt: string) {
    return this.db.user.create({ data: { email, hash, salt } });
  }
}
