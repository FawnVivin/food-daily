export const userRoutes = {
  root: 'users',
  updateUser: (userId: number) => `${userRoutes.root}/${userId}`,
}

export const consumedProductsRoutes = {
  root: 'consumedProducts',
  dailyStats: (userId:number)=>`${consumedProductsRoutes.root}/stats/${userId}`
}

export const authorizationRoutes = {
  root: 'auth',
  login: ()=>`${authorizationRoutes.root}login`
}
