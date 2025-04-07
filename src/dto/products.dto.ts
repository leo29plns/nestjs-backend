import { IsNumber, IsOptional, IsString, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';
import { IProduct } from 'src/interfaces/IProduct';

export class ProductDTO implements IProduct {
  @IsOptional()
  @IsMongoId()
  _id?: ObjectId;

  @IsString()
  sellerId: string;

  @IsString()
  name: string;

  @IsNumber()
  qty: number;

  @IsNumber()
  price: number;

  @IsNumber()
  tax: number;

  @IsString()
  @IsOptional()
  description?: string;
}
