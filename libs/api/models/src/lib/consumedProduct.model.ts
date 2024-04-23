import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


import { Product } from "./product.model";
import { User } from "./user.model";

import type { ConsumedProduct as ConsumedProductType, Meal } from "@food-daily/shared/types";

@Entity()
export class ConsumedProduct implements ConsumedProductType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  calories: number;

  @Column()
  carbohydrates: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  fats: number;

  @Column("text")
  meal: keyof typeof Meal;

  @Column()
  proteins: number;

  @Column()
  weight: number;

  @ManyToOne(() => Product, (product) => product.consumedProducts, { onDelete: "CASCADE" })
  @JoinColumn()
  product: Product;
  
  @ManyToOne(() => User, (user) => user.consumedProducts)
  @JoinColumn()
  user: User;

  constructor(consumedProduct: Partial<ConsumedProduct>) {
    Object.assign(this, consumedProduct);
  }
}
