import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { user } from "./user.entity";
import { Signup, verifyEmail } from "./user.model";
 
 

@Injectable()
export class UserServices{

    constructor(@InjectRepository(user) private userepo: Repository<user>){}

 SignUp( data: Signup) {

    const saltOrRounds = 10;
    data.password =bcrypt.hashSync(data.password, saltOrRounds);
    const otp = Math.floor(100000 + Math.random() * 900000);

    const user = this.userepo.create({
    user_name: data.username,
    user_Email: data.email,
    user_password: data.password,
    otp: otp
    })
    
    this.userepo.save(user)
    return otp;
}




verification(verify: verifyEmail){


const found = this.userepo.findOneBy({otp:verify.otp })

const newuser = found

if (newuser != null){
    return newuser
}

else{
    return "user not found"
}



}
}

