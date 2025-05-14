import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  readonly password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  readonly password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly iat: number;

  @ApiProperty()
  readonly exp: number;
}
