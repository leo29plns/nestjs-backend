import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { IProductsDTO } from 'src/dto/products.dto';

@Injectable()
export class ProductsService {
  createProduct(product: IProductsDTO): IProductsDTO {
    const newProduct: IProductsDTO = {
      ...product,
    };

    newProduct.id = randomUUID();

    return newProduct;
  }
}
