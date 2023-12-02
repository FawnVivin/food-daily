import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Activity, Sex, Target, User as UserType } from '@food-daily/shared/types'
import { ConsumedProduct, Product } from '@food-daily/api/services'

@Entity()
export class User implements UserType {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  age: number

  @Column()
  height: number

  @Column('text')
  target: keyof typeof Target

  @Column('text')
  sex: keyof typeof Sex

  @Column('text')
  activity: keyof typeof Activity

  @Column()
  weight: number

  @Column()
  calorieNorm: number

  @Column({ default: 0 })
  carbohydrateNorm: number

  @Column({ default: 0 })
  fatsNorm: number

  @Column({ default: 0 })
  proteinNorm: number

  @Column({ default: 'user' })
  role: 'admin' | 'user'

  @OneToMany(() => Product, (product) => product.author, { cascade: ['remove'] })
  products: Product[]

  @OneToMany(() => ConsumedProduct, (consumedProduct) => consumedProduct.user)
  consumedProducts: ConsumedProduct[]
  constructor(user: Partial<User>) {
    Object.assign(this, user)
  }
}
