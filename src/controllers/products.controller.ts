import { Body, Controller, HttpCode, Put } from '@nestjs/common';
import { IProductsDTO } from 'src/dto/products.dto';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Put()
  @HttpCode(201)
  createProduct(@Body() requestProduct: IProductsDTO): IProductsDTO {
    console.log(requestProduct);
    return this.productsService.createProduct(requestProduct);
  }
}
