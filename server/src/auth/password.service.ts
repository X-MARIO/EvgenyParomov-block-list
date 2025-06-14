import { Injectable } from '@nestjs/common';
import { randomBytes, pbkdf2Sync } from 'crypto';

@Injectable()
export class PasswordService {
  public getSalt() {
    return randomBytes(16).toString('hex');
  }

  public getHash(password: string, salt: string) {
    return pbkdf2Sync(password, salt, 1000, 64, 'sha256').toString();
  }
}
