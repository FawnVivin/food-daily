import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConsumedProduct, User } from "@food-daily/api/models";
import { ProductStatus } from "@food-daily/shared/types";

import type { Product as ProductType } from "@food-daily/shared/types";


@Entity()
export class Product implements ProductType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  calories: number;

  @Column()
  carbohydrates: number;

  @Column({ type: "longtext" })
  description: string;

  @Column()
  fats: number;

  @Column()
  proteins: number;

  @Column({ type: "enum", enum: ProductStatus, default: ProductStatus.added})
  status: ProductStatus;

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({ name: "authorId" })
  authorId: number;

  @OneToMany(() => ConsumedProduct, (consumedProduct) => consumedProduct.product, {
    onDelete: "CASCADE"
  })
  consumedProducts: ConsumedProduct[];

  constructor(product: Partial<Product>) {
    Object.assign(this, product);
  }
}
