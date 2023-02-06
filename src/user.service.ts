import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { brotliDecompressSync } from "zlib";
import { user } from "./user.entity";
import { Signup } from './user.model';

@Injectable()
export class methods{

    constructor( @InjectRepository(user) private userepo : Repository<user>  ){
    }

async signup(@Body()  user:Signup) {
const new_user = this.userepo.save(user);
return new_user;

}




}


