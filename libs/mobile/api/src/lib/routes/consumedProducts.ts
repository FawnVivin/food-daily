
export const consumedProductsRoutes = {
    root: 'consumedProducts',
    dailyStats: (userId:number)=>`${consumedProductsRoutes.root}/stats/${userId}`
}
