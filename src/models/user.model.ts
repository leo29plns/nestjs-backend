import { Injectable } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  adress: string;

  @Column()
  phone: string;

  @Column()
  birthDate: Date;
}

@Injectable()
export class UserModel {
  constructor() {}
}
