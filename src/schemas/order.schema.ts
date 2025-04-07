import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProduct } from 'src/interfaces/IProduct';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  invoiceId: string;

  @Prop({ default: Date.now })
  creationDate: Date;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  status: string;

  @Prop({ type: [{ type: Object }], required: true })
  product: IProduct[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
