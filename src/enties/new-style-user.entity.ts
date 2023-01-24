import { EntitySchema } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { UserEntity } from './user.entity';

export const userNewStyle: EntitySchema<UserEntity> =
  new EntitySchema<UserEntity>({
    name: 'UserEntity',
    target: UserEntity,
    columns: {
      getId: {
        type: Number,
        primary: true,
        generated: true,
      },
      getFirstName: {
        type: String,
      },
      getFamilyName: {
        type: String,
      },
    },
    relations: {
      getPhotos: {
        type: 'one-to-many',
        target: 'PhotoEntity',
      },
    },
  });

export const photoNewStyle: EntitySchema<PhotoEntity> =
  new EntitySchema<PhotoEntity>({
    name: 'PhotoEntity',
    target: PhotoEntity,
    columns: {
      getId: {
        type: Number,
        primary: true,
        generated: true,
      },
      getPhotoName: {
        type: String,
      },
    },
    relations: {
      getUser: {
        type: 'many-to-one',
        target: 'UserEntity',
      },
    },
  });
