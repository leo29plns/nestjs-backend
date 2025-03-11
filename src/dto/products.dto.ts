import { IsNumber, IsOptional, IsString } from 'class-validator';

export class IProductsDTO {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  price: number;
}
