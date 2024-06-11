import { Entity, Column } from 'typeorm';
import { IsEmail } from 'class-validator';

import { BaseEntity } from '../../base-entity';

@Entity()
export class User extends BaseEntity {
  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;
}
