import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from './product.model';
import { Injectable } from '@nestjs/common';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  invoiceId: string;

  @Column()
  creationDate: Date;

  @Column()
  price: number;

  @Column()
  status: string;

  @Column()
  product: Array<IProduct>;
}

@Injectable()
export class OrderModel {
  constructor() {}
}
