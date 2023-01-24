import { Module, ModuleMetadata } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { photoNewStyle, userNewStyle } from 'src/enties/new-style-user.entity';
import { UserEntity } from 'src/enties/user.entity';
import { MainController } from './main.controller';
import { UserService } from './user.service';

const metadata: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([UserEntity, userNewStyle, photoNewStyle])],
  controllers: [MainController],
  providers: [UserService],
};

@Module(metadata)
export class UserModule {}
