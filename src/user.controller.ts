import { Body, Controller, Post } from '@nestjs/common';
 
 
import { Forgot, Login, Signup, verifyEmail } from './user.model';

import { UserServices } from './user.service';

@Controller('user')
export class UserController {

constructor( private userService : UserServices  ){

}
// User Signup
@Post ('Signup')
async Signup(@Body() newuser:Signup) {

return this.userService.SignUp(newuser)

}

// Email verification
@Post('/email-verification')

async verification (@Body() verify: verifyEmail){
return await this.userService.verification(verify)
}


// User Login
@Post('/login')
async Login_User(@Body() data: Login){
    return await this.userService.LoginUser(data)
}

// Forgot Password
@Post('/forgotpassword')
async ForgotPassword(@Body() data: Forgot ){
this.userService.Forgotpassword(data)
return "updated successfully!"
}


}
