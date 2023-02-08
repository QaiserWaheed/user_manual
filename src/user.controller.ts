import { Body, Controller, Post } from '@nestjs/common';
 
 
import { Signup, verifyEmail } from './user.model';

import { UserServices } from './user.service';

@Controller('user')
export class UserController {

constructor( private userService : UserServices  ){

}

@Post ('Signup')
async Signup(@Body() newuser:Signup) {

return this.userService.SignUp(newuser)

}

@Post('/email-verification')

async verification (@Body() verify: verifyEmail){
return this.userService.verification(verify)
}


}
