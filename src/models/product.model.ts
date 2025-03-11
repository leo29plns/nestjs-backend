import { Injectable } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IProduct {
  id: string;
  sellerId: string;
  name: string;
  qty: number;
  price: number;
  tax: number;
  description: string;
  minimumAge: number;
}

@Entity()
export class ProductEntity implements IProduct {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  sellerId: string;

  @Column()
  name: string;

  @Column()
  qty: number;

  @Column()
  price: number;

  @Column()
  tax: number;

  @Column()
  description: string;

  @Column()
  minimumAge: number;
}

@Injectable()
export class ProductModel {
  constructor() {}
}
