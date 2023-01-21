import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSetting } from './database-setting';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseSetting), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
