import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { ConsumedProduct, User } from '@food-daily/api/services'

import type {  Product as ProductType } from '@food-daily/shared/types'


@Entity()
export class Product implements ProductType {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  calories: number

  @Column()
  carbohydrates: number

  @Column({type: 'longtext'})
  description: string

  @Column()
  fats: number

  @Column()
  proteins: number

  @Column({ default: false })
  verified: boolean

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn()
  author: number

  @OneToMany(() => ConsumedProduct, (consumedProduct) => consumedProduct.product)
  consumedProducts: ConsumedProduct[]
  constructor(product: Partial<Product>) {
    Object.assign(this, product)
  }
}
