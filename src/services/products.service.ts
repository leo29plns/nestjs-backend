import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Model, ObjectId } from 'mongoose';
import { ProductDTO } from 'src/dto/products.dto';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(product: ProductDTO): Promise<ProductDTO> {
    const newProduct = await this.productModel.create(product);

    return plainToClass(ProductDTO, newProduct.toObject());
  }

  async delete(id: ObjectId): Promise<ProductDTO> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new NotFoundException('Product not found');
    }

    return plainToClass(ProductDTO, deletedProduct.toObject());
  }

  async update(id: ObjectId, product: ProductDTO): Promise<ProductDTO> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      product,
      { new: true },
    );

    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }

    return plainToClass(ProductDTO, updatedProduct.toObject());
  }

  async findById(id: ObjectId): Promise<ProductDTO> {
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return plainToClass(ProductDTO, product.toObject());
  }
}
