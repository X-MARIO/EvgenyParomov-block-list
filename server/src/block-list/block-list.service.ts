import { Injectable } from '@nestjs/common';
import { AddBlockItemDto, BlockListQueryDto } from './dto';
import { DbService } from '../db/db.service';

@Injectable()
export class BlockListService {
  public constructor(private readonly db: DbService) {}

  public async create(userId: number) {
    return await this.db.blockList.create({
      data: {
        ownerId: userId,
      },
    });
  }

  public async getByUser(userId: number, query: BlockListQueryDto) {
    return await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
      include: {
        items: {
          where: { data: { contains: query.q, mode: 'insensitive' } },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
  }

  public async addItem(userId: number, data: AddBlockItemDto) {
    const blockList = await this.db.blockList.findFirstOrThrow({
      where: { ownerId: userId },
    });

    return await this.db.blockItem.create({
      data: {
        blockListId: blockList.id,
        ...data,
      },
    });
  }

  public async removeItem(userId: number, itemId: number) {
    const blockList = await this.db.blockList.findFirstOrThrow({
      where: { ownerId: userId },
    });

    return await this.db.blockItem.delete({
      where: { blockListId: blockList.id, id: itemId },
    });
  }
}
