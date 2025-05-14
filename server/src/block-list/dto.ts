import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '../../generated/prisma';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class BlockItemDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly blockListId: number;

  @ApiProperty({
    enum: [$Enums.BlockItemType.Website, $Enums.BlockItemType.Keyword],
  })
  readonly type: $Enums.BlockItemType;

  @ApiProperty()
  readonly data: string;

  @ApiProperty()
  readonly createdAt: Date;
}

export class BlockListDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly ownerId: number;

  @ApiProperty({
    type: [BlockItemDto],
  })
  readonly items: BlockItemDto[];
}

export class BlockListQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  readonly q?: string;
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: [$Enums.BlockItemType.Website, $Enums.BlockItemType.Keyword],
  })
  @IsIn([$Enums.BlockItemType.Website, $Enums.BlockItemType.Keyword])
  readonly type: $Enums.BlockItemType;

  @ApiProperty()
  @IsString()
  readonly data: string;
}
