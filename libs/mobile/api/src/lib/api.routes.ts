import type { ConsumedProduct } from "@food-daily/shared/types";

export const userRoutes = {
  root: "users",
  updateUser: (userId: number) => `${userRoutes.root}/${userId}`
};

export const consumedProductsRoutes = {
  root: "consumedProducts",
  dailyStats: (userId: number) => `${consumedProductsRoutes.root}/stats/${userId}`,
  getProductsByMeal: (meal: ConsumedProduct["meal"], userId: number) => `${consumedProductsRoutes.root}/${meal}/${userId}`,
  getProductById: (productId: number) => `${consumedProductsRoutes.root}/${productId}`,
  delete: (productId: number) => `${consumedProductsRoutes.root}/${productId}`,
  update: (productId: number) => `${consumedProductsRoutes.root}/${productId}`,
  create: () => `${consumedProductsRoutes.root}`
};

export const authorizationRoutes = {
  root: "auth",
  login: () => `${authorizationRoutes.root}/login`,
  registration:()=>`${authorizationRoutes.root}/registration`
};

export const productsRoutes = {
  root: "products",
  getProductById: (productId: number) => `${productsRoutes.root}/${productId}`,
  deleteProduct: (productId: number) => `${productsRoutes.root}/${productId}`,
  createProduct: () => productsRoutes.root,
  getAllProducts: () => `${productsRoutes.root}/verified`
};

export const waterRoutes = {
  root: "water",
  updateWater: ()=>waterRoutes.root,
  getWaterById: (userId: number) => `${waterRoutes.root}/${userId}`,
}
