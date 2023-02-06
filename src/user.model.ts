import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class Signup{




    @ApiProperty()
    @IsNotEmpty()
    user_name : string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    user_email: string

    @ApiProperty()
    @IsNotEmpty()
    password : string

    @ApiProperty()
    @IsNotEmpty()
    confirm_pass : string
    
    
    
    }
    
    
    
    export class Login{

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    user_email : string

    @ApiProperty()
    @IsNotEmpty()
    user_pass :  string
    
    
    }
    
    export class ResetPass{

    @ApiProperty()
    @IsNotEmpty()
    user_pass : string

    @ApiProperty()
    @IsNotEmpty()
    new_pass : string

    @ApiProperty()
    @IsNotEmpty()
    confirm_pass: string
    
    
    }
    
    export class forget {

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    user_email : string

    @ApiProperty()
    @IsNotEmpty()
    otp : string

    @ApiProperty()
    @IsNotEmpty()
    new_pass: string

    @ApiProperty()
    @IsNotEmpty()
    confirm_pass: string
    
    }