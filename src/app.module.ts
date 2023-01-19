import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainController } from './main/main.controller';
import { CrudService } from './crud/crud.service';

@Module({
  imports: [],
  controllers: [AppController, MainController],
  providers: [AppService, CrudService],
})
export class AppModule {}
