import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from './product.model';

@Entity()
export class CommandEntity {
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
