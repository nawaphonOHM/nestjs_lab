import { Module, ModuleMetadata } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from 'src/photo/photo.entity';
import { MainController } from './main.controller';
import { UserEntity } from './user.entity';

const metadata: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([UserEntity, PhotoEntity])],
  controllers: [MainController],
  providers: [],
};

@Module(metadata)
export class UserModule {}
