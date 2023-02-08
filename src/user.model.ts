import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsEmail } from 'class-validator';
import { IForgotPassword, ILogin, ISignup, IVerification } from './user.dto';

export class Signup implements ISignup {
  @ApiProperty({ default: 'Umar' })
  @IsNotEmpty()
  @IsString()
  username: string;
  @ApiProperty({ default: 'Umar@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({ default: 'Password' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class verifyEmail implements IVerification {
  @ApiProperty({ default: 'Umar@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @ApiProperty()
  otp: number;
}

export class Login implements ILogin {
  @ApiProperty({ default: 'Umar@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class Forgot implements IForgotPassword {
  @ApiProperty({ default: 'Umar@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  otp: number;
  @ApiProperty()
  @IsNotEmpty()
  newpass: string;
}
