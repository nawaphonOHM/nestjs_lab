import { Controller, Get, Version } from '@nestjs/common';
import { UserEntity } from 'src/enties/user.entity';
import { UserService } from './user.service';

@Controller('/typeorm-test')
export class MainController {
  constructor(private readonly userService: UserService) {}

  @Version('1')
  @Get('/fetch-data')
  public async createData(): Promise<UserEntity[]> {
    const returnedData: UserEntity[] = [];

    await this.userService.findAll().then((data: UserEntity[]): void => {
      returnedData.push(...data);
    });

    return returnedData;
  }
}
