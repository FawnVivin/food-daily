import axios from 'axios'
import { apiUrl } from '@food-daily/mobile/constants'
import { useToken } from '@food-daily/mobile/hooks'
import { useQuery } from '@tanstack/react-query'
import { User } from '@food-daily/shared/types'
import { authorizationRoutes } from './routes'

export const api = {
    async get<T>(url: string, params = {}): Promise<T> {
        const res = await axios.get<T>(`${apiUrl}${url}`, { ...params })

        return res.data
    },
    async post<B, T>(url: string, body: B, params = {}): Promise<T> {
        const res = await axios.post(`${apiUrl}${url}`, body, { ...params })

        return res.data
    },
    async put<B, T>(url: string, body: B, params = {}): Promise<T> {
        const res = await axios.put(`${apiUrl}${url}`, body, { ...params })

        return res.data
    }
}

export const useGetUser = () => {
    const token = useToken()

    return useQuery({
        queryKey: ['user', token],
        queryFn: () => api.get<User>(authorizationRoutes.getUser, { headers: { Authorization: `Bearer ${token}` } })
    })
}
