import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "@food-daily/api/models";
import { Repository } from "typeorm";

@Injectable()
export class BaseProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {
  }

  async findOneById(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

}
