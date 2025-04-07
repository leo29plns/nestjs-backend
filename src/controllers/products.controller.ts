import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ProductDTO } from 'src/dto/products.dto';
import { MongoIdPipe } from 'src/pipes/mongo-id/mongo-id.pipe';
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
  async delete(@Param('id', MongoIdPipe) id: ObjectId): Promise<ProductDTO> {
    return this.productsService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id', MongoIdPipe) id: ObjectId,
    @Body() requestProduct: ProductDTO,
  ): Promise<ProductDTO> {
    return this.productsService.update(id, requestProduct);
  }

  @Get(':id')
  async findById(@Param('id', MongoIdPipe) id: ObjectId): Promise<ProductDTO> {
    return this.productsService.findById(id);
  }

  @Get()
  async findAll(
    @Param('lastId', MongoIdPipe) lastId: ObjectId,
    @Param('limit') limit: number,
  ): Promise<ProductDTO[]> {
    return this.productsService.findAll(lastId, limit);
  }
}
