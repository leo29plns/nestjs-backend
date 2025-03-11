import { Entity, Column } from 'typeorm';
import { UserEntity } from './user.model';

@Entity()
export class SellerEntity extends UserEntity {
  @Column()
  companyName: string;

  @Column()
  siret: string;

  @Column()
  productTypeId: string;
}
