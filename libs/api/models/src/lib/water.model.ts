// import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// import { User } from "@food-daily/api/models";
//
// @Entity()
// export class Water implements WaterType {
//   @PrimaryGeneratedColumn()
//   id: number;
//   @Column()
//   quantity: string;
//   @CreateDateColumn()
//   date: Date;
//   @ManyToOne(() => User, (user) => user.water)
//   @JoinColumn({ name: "userId" })
//   userId: number;
//   constructor(weight: Partial<Water>) {
//     Object.assign(this, weight);
//   }
// }
