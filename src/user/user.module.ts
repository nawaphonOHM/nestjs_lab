import { Module, ModuleMetadata } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudService } from 'src/crud/crud.service';
import { MainController } from 'src/main/main.controller';
import { PhotoEntity } from 'src/photo/photo.entity';
import { UserEntity } from './user.entity';

const metadata: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([UserEntity, PhotoEntity])],
  controllers: [MainController],
  providers: [CrudService],
};

@Module(metadata)
export class UserModule {}
