export type Product = {
  id:number,
  title:string,
  description:string,
  params:ProductParams
  authorId:number,
  verified:boolean
}

export type ProductParams = {
  fats: number,
  proteins:number,
  calories:number,
  carbohydrates:number,
  weight:number
}
