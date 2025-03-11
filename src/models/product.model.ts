import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

export interface IProduct {
  id: string;
  qty: number;
  price: number;
}
