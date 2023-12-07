import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { Product } from "@food-daily/api/models";
import { ProductStatus } from "@food-daily/shared/types";

import type { CreateProductDto } from "@food-daily/shared/types";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly entityManager: EntityManager
  ) {
  }

  async create(productDto: CreateProductDto) {
    const newProduct = new Product(productDto);

    await this.entityManager.save(newProduct);
  }

  async remove(id: number) {
    await this.productRepository.delete(id);
  }

  async findOneById(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findAllVerified(): Promise<Product[]> {
    return this.productRepository.findBy({ status: ProductStatus.added });
  }

  async updateState(id: number, newState: Product["status"]) {
    const product = await this.productRepository.findOneBy({ id });

    product.status = newState;
    await this.entityManager.save(product);
  }
}
