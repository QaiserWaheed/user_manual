import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateUserDto } from "./user.dto";
 

@Entity()
export class user{
  
 

    @PrimaryGeneratedColumn()
    id : string

    @Column()
    user_name: string

    @Column()
    user_Email: string

    @Column()
    user_password : string




}

 