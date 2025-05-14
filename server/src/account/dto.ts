import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class AccountDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly ownerId: number;

  @ApiProperty()
  @IsBoolean()
  readonly isBlockingEnabled: boolean;
}

export class PatchAccountDto {
  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  readonly isBlockingEnabled?: boolean;
}
