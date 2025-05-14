import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from './dto';
import { AuthGuard } from '../auth/auth.guard';
import { SessionInfo } from '../auth/session-info.decorator';
import { GetSessionInfoDto } from '../auth/dto';
import { AccountService } from './account.service';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  public constructor(private readonly accountService: AccountService) {}

  @Get()
  @ApiOkResponse({
    type: AccountDto,
  })
  public async getAccount(
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return await this.accountService.getAccount(session.id);
  }

  @Patch()
  @ApiOkResponse({
    type: AccountDto,
  })
  public async patchAccount(
    @Body() body: PatchAccountDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return await this.accountService.patchAccount(session.id, body);
  }
}
