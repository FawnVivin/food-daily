export type Product = ProductParams & {
  id: number,
  name: string,
  description: string,
  status: ProductStatus
}

export type ProductParams = {
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number,
  weight?: number
}

export type CreateProductDto = {
  name: string,
  description: string,
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number,
  authorId: number,
}

export enum ProductStatus {
  moderation = "moderation",
  added = "added",
  declined = "declined"
}

export const ProductStatusMessage:Record<ProductStatus, string> = {
  moderation : "На модерации",
  added: "Размещен в общий доступ",
  declined: "Не прошел модерацию"
}

export const ProductStatusIcon:Record<ProductStatus, string> = {
  moderation : "web-clock",
  added: "web-check",
  declined: "web-remove"
}
