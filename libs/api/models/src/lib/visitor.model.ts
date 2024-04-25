import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";

import { Water } from "./water.model";
import { Trainer } from "./trainer.model";
import { Product } from "./product.model";
import { ConsumedProduct } from "./consumedProduct.model";
import { User } from "./user.model";

import type { Activity, Sex, Target, Visitor as VisitorType } from "@food-daily/shared/types"

@Entity()
export class Visitor implements VisitorType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column("text")
  target: keyof typeof Target;

  @Column("text")
  sex: keyof typeof Sex;

  @Column("text")
  activity: keyof typeof Activity;

  @Column()
  calorieNorm: number;

  @Column()
  carbohydrateNorm: number;

  @Column()
  fatsNorm: number;

  @Column()
  proteinNorm: number;

  @OneToMany(() => Product, (product) => product.authorId, { cascade: ["remove"] })
  products: Product[];

  @OneToMany(() => ConsumedProduct, (consumedProduct) => consumedProduct.visitor)
  consumedProducts: ConsumedProduct[];
  
  @OneToMany(() => Water, (water) => water.visitor)
  water: number;

  @ManyToOne(() => Trainer, (trainer) => trainer.id)
  @JoinColumn()
  trainer: number;

  @OneToOne(() => User, (user) => user.id)
  user: User;
  
  constructor(visitor: Partial<Visitor>) {
    Object.assign(this, visitor);
  }
}
