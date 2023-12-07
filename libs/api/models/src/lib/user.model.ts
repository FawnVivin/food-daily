import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "@food-daily/shared/types";
import { ConsumedProduct, Product } from "@food-daily/api/models";

import type { Activity, Sex, Target, User as UserType } from "@food-daily/shared/types";

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

  @Column("text")
  target: keyof typeof Target;

  @Column("text")
  sex: keyof typeof Sex;

  @Column("text")
  activity: keyof typeof Activity;

  @Column()
  weight: number;

  @Column()
  password: string;

  @Column({ default: 0 })
  calorieNorm: number;

  @Column({ default: 0 })
  carbohydrateNorm: number;

  @Column({ default: 0 })
  fatsNorm: number;

  @Column({ default: 0 })
  proteinNorm: number;

  @Column({ type: "enum", enum: Role, default: Role.User })
  role: Role;

  @OneToMany(() => Product, (product) => product.authorId, { cascade: ["remove"] })
  products: Product[];

  @OneToMany(() => ConsumedProduct, (consumedProduct) => consumedProduct.user)
  consumedProducts: ConsumedProduct[];

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
