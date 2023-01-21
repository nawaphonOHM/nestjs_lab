import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSetting } from './database-setting';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseSetting), UserModule],
  controllers: [MainController],
  providers: [],
})
export class AppModule {}
