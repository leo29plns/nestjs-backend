import { Entity, Column } from 'typeorm';
import { UserEntity } from './user.model';
import { Injectable } from '@nestjs/common';

@Entity()
export class SellerEntity extends UserEntity {
  @Column()
  companyName: string;

  @Column()
  siret: string;

  @Column()
  productTypeId: string;
}

@Injectable()
export class SellerModel {
  constructor() {}
}
