export const userRoutes = {
  root: "users",
  updateUser: (userId: number) => `${userRoutes.root}/${userId}`
};

export const consumedProductsRoutes = {
  root: "consumedProducts",
  dailyStats: (userId: number) => `${consumedProductsRoutes.root}/stats/${userId}`
};

export const authorizationRoutes = {
  root: "auth",
  login: () => `${authorizationRoutes.root}/login`
};

export const productsRoutes = {
  root: "products",
  getProductById: (productId: number) => `${productsRoutes.root}/${productId}`,
  deleteProduct: (productId: number) => `${productsRoutes.root}/${productId}`,
  createProduct: () => productsRoutes.root
};
