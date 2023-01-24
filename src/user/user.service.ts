import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userNewStyle } from 'src/enties/new-style-user.entity';
import { UserEntity } from 'src/enties/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly dataSource: DataSource,
  ) {}

  public async findAllV1(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }

  public async findAllV2(): Promise<UserEntity[]> {
    const userRepository: Repository<UserEntity> =
      this.dataSource.getRepository<UserEntity>(userNewStyle);

    return await userRepository.find();
  }
}
