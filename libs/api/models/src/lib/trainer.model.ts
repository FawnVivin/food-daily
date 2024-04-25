import { Column, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne } from "typeorm";


import { Visitor } from "./visitor.model";
import { User } from "./user.model";

import type {TrainerType} from "@food-daily/shared/types"


@Entity()
export class Trainer implements TrainerType {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Visitor, (visitor) => visitor.trainer)
  visitors: Visitor[];

  @OneToOne(() => User, (user) => user.id)
  user: User;

  constructor(trainer: Partial<Trainer>) {
    Object.assign(this, trainer);
  }
}
