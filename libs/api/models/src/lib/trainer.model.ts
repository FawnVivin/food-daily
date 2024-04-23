import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./user.model"

import type {TrainerType} from "@food-daily/shared/types"

@Entity()
export class Trainer implements TrainerType {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => User, (user) => user.trainer)
  users: User[];
  constructor(trainer: Partial<Trainer>) {
    Object.assign(this, trainer);
  }
}
