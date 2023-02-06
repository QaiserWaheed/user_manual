import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { user } from './user.entity';
import { UserServices } from './user.service';


@Module({


  imports: [TypeOrmModule.forFeature([user])],
 
controllers: [UserController],
providers: [UserServices]
})
export class UserModule {}
