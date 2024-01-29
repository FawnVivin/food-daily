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

  // @OneToMany(() => Weight, (weight) => weight.userId)
  // weight: number;
  //
  // @OneToMany(() => Water, (water) => water.userId)
  // water: number;
  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
