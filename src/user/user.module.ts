import { Module, ModuleMetadata } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainController } from './main.controller';
import { PhotoEntity } from './photo.entity';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

const metadata: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([UserEntity, PhotoEntity])],
  controllers: [MainController],
  providers: [UserService],
};

@Module(metadata)
export class UserModule {}
