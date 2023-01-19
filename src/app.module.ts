import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainController } from './main/main.controller';
import { CrudService } from './crud/crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSetting } from './database-setting';

@Module({
  imports: [TypeOrmModule.forRoot(databaseSetting)],
  controllers: [AppController, MainController],
  providers: [AppService, CrudService],
})
export class AppModule {}
