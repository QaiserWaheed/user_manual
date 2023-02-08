import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entity';
import { UserModule } from './user.module';

const DB = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  entities: [user],
  synchronize: true,
});

@Module({
  imports: [UserModule, DB],
  controllers: [],
  providers: [],
})
export class AppModule {}
