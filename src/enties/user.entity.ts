import {
  Column,
  Entity,
  EntityOptions,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PhotoEntity } from './photo.entity';

const entityConfig: EntityOptions = {
  name: 'User_Detail',
};

@Entity(entityConfig)
export class UserEntity {
  @PrimaryGeneratedColumn('identity', { name: 'user_id' })
  private id: number;

  @Column({ name: 'first_name', type: 'varchar' })
  private firstName: string;

  @Column({ name: 'family_name', type: 'varchar' })
  private familyName: string;

  @OneToMany(() => PhotoEntity, (user) => user.getUser)
  private _photos: PhotoEntity[];

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  public getFamilyName(): string {
    return this.familyName;
  }

  public setFamilyName(familyName: string): void {
    this.familyName = familyName;
  }

  public getPhotos(): PhotoEntity[] {
    return this._photos;
  }
  public setPhotos(value: PhotoEntity[]): void {
    this._photos = value;
  }
}
