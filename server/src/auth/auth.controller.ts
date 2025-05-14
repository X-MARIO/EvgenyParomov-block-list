import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CookieService } from './cookie.service';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session-info.decorator';

@Controller('auth')
export class AuthController {
  public constructor(
    private readonly authService: AuthService,
    private readonly cookieService: CookieService,
  ) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  public async signUp(
    @Body() body: SignUpBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(
      body.email,
      body.password,
    );
    this.cookieService.setToken(res, accessToken);
    return;
  }

  @Post('sign-in')
  @ApiCreatedResponse()
  @HttpCode(HttpStatus.OK)
  public async signIn(
    @Body() body: SignInBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signIn(
      body.email,
      body.password,
    );
    this.cookieService.setToken(res, accessToken);
    return;
  }

  @Post('sign-out')
  @ApiCreatedResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  public async signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
    return;
  }

  @Get('session')
  @ApiCreatedResponse({
    type: GetSessionInfoDto,
  })
  @UseGuards(AuthGuard)
  public async getSessionInfo(@SessionInfo() session: GetSessionInfoDto) {
    return session;
  }
}
