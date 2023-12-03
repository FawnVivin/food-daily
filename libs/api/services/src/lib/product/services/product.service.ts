import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityManager, Repository } from 'typeorm'

import { Product } from '../models'

import type { CreateProductDto } from '@food-daily/shared/types'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly entityManager: EntityManager
  ) {
  }

  async create(productDto: CreateProductDto) {
    const newProduct = new Product(productDto)

    await this.entityManager.save(newProduct)
  }

  async remove(id: number) {
    await this.productRepository.delete(id)
  }

  async findOneById(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id })
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find()
  }
  async findAllVerified(): Promise<Product[]> {
    return this.productRepository.findBy({verified:true})
  }

  async updateState(id: number, newState: Product['verified']) {
    const product = await this.productRepository.findOneBy({ id })

    product.verified = newState
    await this.entityManager.save(product)
  }
}
