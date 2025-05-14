import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('sign-up')
  public async signUp() {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  public async signIn() {}

  @Post('sign-out')
  @HttpCode(HttpStatus.OK)
  public async signOut() {}

  @Get('session')
  public async getSessionInfo() {}
}
