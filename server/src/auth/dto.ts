import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  readonly email: string;

  @ApiProperty({
    example: '1234',
  })
  readonly password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  readonly email: string;

  @ApiProperty({
    example: '1234',
  })
  readonly password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly email: string;
}
