import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';
import { ProductDTO } from 'src/dto/products.dto';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Put()
  @HttpCode(201)
  async create(@Body() requestProduct: ProductDTO): Promise<ProductDTO> {
    return this.productsService.create(requestProduct);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductDTO> {
    return this.productsService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() requestProduct: ProductDTO,
  ): Promise<ProductDTO> {
    return this.productsService.update(id, requestProduct);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ProductDTO> {
    return this.productsService.findById(id);
  }
}
