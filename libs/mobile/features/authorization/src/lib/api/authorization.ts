import { useMutation } from '@tanstack/react-query'
import { authorizationRoutes , api } from '@food-daily/mobile/api'

import type { Login, User } from '@food-daily/shared/types'


export const useLogin = () =>
  useMutation({
    mutationFn: (data: Login) => api.post<Login, { access_token: string, user: User }>(authorizationRoutes.login, data)
  })

