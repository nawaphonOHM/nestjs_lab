import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSetting } from './database-setting';
import { MainController } from './user/main.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseSetting), UserModule],
  controllers: [MainController],
  providers: [],
})
export class AppModule {}
