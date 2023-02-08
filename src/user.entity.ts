import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

 

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

    @Column({ nullable: true })
    otp : number
    


}

 