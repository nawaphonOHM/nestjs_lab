import { Controller, Get } from '@nestjs/common';

@Controller('/typeorm-test')
export class MainController {
  @Get('/create-data')
  public createData(): string {
    return 'Hello World';
  }
}
