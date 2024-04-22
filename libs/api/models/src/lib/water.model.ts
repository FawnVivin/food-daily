import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./user.model";

import type {WaterType} from "@food-daily/shared/types"

@Entity()
export class Water implements WaterType {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  quantity: number;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => User, (user) => user.water)
  @JoinColumn()
  user: User;
  constructor(weight: Partial<Water>) {
    Object.assign(this, weight);
  }
}
