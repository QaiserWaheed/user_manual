import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { user } from './user.entity';
import { Forgot, Login, Signup, verifyEmail } from './user.model';

@Injectable()
export class UserServices {
  constructor(@InjectRepository(user) private userepo: Repository<user>) {}



  //Signup Method
  SignUp(data: Signup) {
    const saltOrRounds = 10;
    data.password = bcrypt.hashSync(data.password, saltOrRounds);
    const otp = Math.floor(100000 + Math.random() * 900000);

    const user = this.userepo.create({
      user_name: data.username,
      user_Email: data.email,
      user_password: data.password,
      otp: otp,
    });

    this.userepo.save(user);
    return otp;
  }




  // Email verificatio method
  verification(verify: verifyEmail) {
    const found = this.userepo.findOneBy({
      otp: verify.otp,
      user_Email: verify.email,
    });

    if (found != null) {
      return found;
    } else if (found == null) {
      return 'user not found';
    }
  }





  // Login Method
  LoginUser(login: Login) {
    const saltOrRounds = 10;
    login.password = bcrypt.hashSync(login.password, saltOrRounds);
    const found = this.userepo.findOneBy({
      user_Email: login.email,
      user_password: login.password,
    });

    if (found != null) {
      return found;
    } else if (found == null) {
      return 'user not found';
    }
  }





  // forgot password
  
   Forgotpassword(forgot: Forgot){
   
    const found = this.userepo.findOneBy({user_Email: forgot.email, otp: forgot.otp})

    if (found){
        const user = this.userepo.update({user_Email: forgot.email},{
            user_password: forgot.newpass})
        }
    }
   

   }



