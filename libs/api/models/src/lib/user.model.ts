import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Role } from "@food-daily/shared/types";


import { Water } from "./water.model";
import { Trainer } from "./trainer.model";
import { Product } from "./product.model";
import { ConsumedProduct } from "./consumedProduct.model";

import type { Activity, Sex, Target, User as UserType } from "@food-daily/shared/types"

@Entity()
export class User implements UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  email: string;

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
  password: string;

  @Column()
  calorieNorm: number;

  @Column()
  carbohydrateNorm: number;

  @Column()
  fatsNorm: number;

  @Column()
  proteinNorm: number;

  @Column({ type: "enum", enum: Role, default: Role.User })
  role: Role;

  @OneToMany(() => Product, (product) => product.authorId, { cascade: ["remove"] })
  products: Product[];

  @OneToMany(() => ConsumedProduct, (consumedProduct) => consumedProduct.user)
  consumedProducts: ConsumedProduct[];
  
  @OneToMany(() => Water, (water) => water.user)
  water: number;

  @ManyToOne(() => Trainer, (trainer) => trainer.id)
  @JoinColumn()
  trainer: number;
  
  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
