import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { Request } from 'express';
import { CookieService } from './cookie.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.cookies[CookieService.tokenKey];

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const sessionInto = this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      req['session'] = sessionInto;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}
