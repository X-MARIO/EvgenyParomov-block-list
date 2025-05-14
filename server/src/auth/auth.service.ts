import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  public constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  public async signUp(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      throw new BadRequestException({
        type: 'email-exists',
      });
    }

    const salt = this.passwordService.getSalt();
    const hash = this.passwordService.getHash(password, salt);

    const newUser = await this.usersService.create(email, hash, salt);

    const accessToken = await this.jwtService.signAsync({
      id: newUser.id,
      email: newUser.email,
    });

    return { accessToken };
  }

  public async signIn(email: string, password: string) {}
}
