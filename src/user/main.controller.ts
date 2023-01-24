import { Controller, Get, Version } from '@nestjs/common';
import { UserEntity } from 'src/enties/user.entity';
import { UserService } from './user.service';

@Controller('/typeorm-test')
export class MainController {
  constructor(private readonly userService: UserService) {}

  @Version('1')
  @Get('/fetch-data')
  public async createDataV1(): Promise<UserEntity[]> {
    const returnedData: UserEntity[] = [];

    await this.userService.findAllV1().then((data: UserEntity[]): void => {
      returnedData.push(...data);
    });

    return returnedData;
  }

  @Version('2')
  @Get('/fetch-data')
  public async createDataV2(): Promise<UserEntity[]> {
    const returnedData: UserEntity[] = [];

    await this.userService.findAllV2().then((data: UserEntity[]): void => {
      returnedData.push(...data);
    });

    return returnedData;
  }
}
