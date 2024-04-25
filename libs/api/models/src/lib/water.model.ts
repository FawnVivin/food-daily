import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


import { Visitor } from "./visitor.model";

import type {WaterType} from "@food-daily/shared/types"

@Entity()
export class Water implements WaterType {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  quantity: number;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => Visitor, (visitor) => visitor.water)
  @JoinColumn()
  visitor: Visitor;
  constructor(weight: Partial<Water>) {
    Object.assign(this, weight);
  }
}
