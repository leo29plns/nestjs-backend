import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';

@Schema()
export class Seller extends User {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  siret: string;

  @Prop({ required: true })
  productTypeId: string;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
