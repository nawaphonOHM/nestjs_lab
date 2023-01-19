import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainControllerController } from './main-controller/main-controller.controller';
import { MainController } from './main/main.controller';

@Module({
  imports: [],
  controllers: [AppController, MainControllerController, MainController],
  providers: [AppService],
})
export class AppModule {}
