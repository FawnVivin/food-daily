const root = 'auth/'

export const userRoutes = {
    root: 'users',
    updateUser: (userId: number) => `${userRoutes.root}/${userId}`
}
