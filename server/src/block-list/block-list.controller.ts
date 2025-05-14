import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import {
  AddBlockItemDto,
  BlockItemDto,
  BlockListDto,
  BlockListQueryDto,
} from './dto';
import { BlockListService } from './block-list.service';
import { AuthGuard } from '../auth/auth.guard';
import { SessionInfo } from '../auth/session-info.decorator';
import { GetSessionInfoDto } from '../auth/dto';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  public constructor(private readonly blockListService: BlockListService) {}

  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  public async getList(
    @Query() query: BlockListQueryDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockListDto> {
    return await this.blockListService.getByUser(session.id, query);
  }

  @Post('item')
  @ApiOkResponse({
    type: BlockItemDto,
  })
  public async addBlockItem(
    @Body() body: AddBlockItemDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return await this.blockListService.addItem(session.id, body);
  }

  @Delete('item/:id')
  @ApiOkResponse({
    type: BlockItemDto,
  })
  public async removeBlockItem(
    @Param(ParseIntPipe) id: number,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return await this.blockListService.removeItem(session.id, id);
  }
}
