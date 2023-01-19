import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  Entity,
  EntityOptions,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

const entityConfig: EntityOptions = {
  name: 'Photo',
};

@Entity(entityConfig)
export class PhotoEntity {
  @PrimaryGeneratedColumn('identity', { name: 'photo_id' })
  private id: number;

  @ManyToOne(() => UserEntity)
  private user: UserEntity;

  @Column({ name: 'photo_name', type: 'varchar' })
  private photoName: string;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }
  public getUser(): UserEntity {
    return this.user;
  }

  public setUser(user: UserEntity): void {
    this.user = user;
  }
  public getPhotoName(): string {
    return this.photoName;
  }

  public setPhotoName(photoName: string): void {
    this.photoName = photoName;
  }
}
