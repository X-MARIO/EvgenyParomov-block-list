import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  @Post('sign-up')
  @ApiCreatedResponse()
  public async signUp(@Body() body: SignUpBodyDto) {
    return null;
  }

  @Post('sign-in')
  @ApiCreatedResponse()
  @HttpCode(HttpStatus.OK)
  public async signIn(@Body() body: SignInBodyDto) {
    return null;
  }

  @Post('sign-out')
  @ApiCreatedResponse()
  @HttpCode(HttpStatus.OK)
  public async signOut() {}

  @Get('session')
  @ApiCreatedResponse({
    type: GetSessionInfoDto,
  })
  public async getSessionInfo() {}
}
