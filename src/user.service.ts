import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { brotliDecompressSync } from "zlib";
import { CreateUserDto, Login } from './user.dto';
import { user } from "./user.entity";
 
 

@Injectable()
export class UserServices{

    constructor(@InjectRepository(user) private userepo: Repository<user>){}

 create( createuserDto: CreateUserDto) {

    const new_user = this.userepo
    new_user.save(createuserDto);
    
}






}


