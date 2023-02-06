import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from './user.entity';
import { methods } from './user.service';

@Controller('user')
export class UserController {

constructor( private control_panel : methods  ){

}

@Post ('Signup')
 Signup(@Body()  user:methods){

   const new_user = this.control_panel.signup(null)

    
}



}
