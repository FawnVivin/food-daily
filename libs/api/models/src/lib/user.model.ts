import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Role } from "@food-daily/shared/types";

import { Visitor } from "./visitor.model";
import { Trainer } from "./trainer.model";

import type { User as UserType } from "@food-daily/shared/types"

@Entity()
export class User implements UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: "enum", enum: Role, default: Role.User })
  role: Role;

  @OneToOne(() => Visitor, (visitor) => visitor.id)
  @JoinColumn()
  visitor: number;

  @OneToOne(() => Trainer, (trainer) => trainer.id)
  @JoinColumn()
  trainer: number;
  
  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
