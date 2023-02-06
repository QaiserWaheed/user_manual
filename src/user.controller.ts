import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from './user.entity';

import { UserServices } from './user.service';

@Controller('user')
export class UserController {

constructor( private USER : UserServices  ){

}

@Post ('Signup')
async Signup(@Body() newuser:user) {


    
}



}
