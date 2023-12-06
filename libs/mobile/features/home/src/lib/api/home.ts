import { useToken } from '@food-daily/mobile/hooks'
import { useQuery } from '@tanstack/react-query'
import { DailyStats } from '@food-daily/shared/types'
import { api } from '@food-daily/mobile/api'
import { consumedProductsRoutes } from '../../../../../api/src/lib/routes/consumedProducts'

export const useGetDailyStats = (userId: number | undefined) => {
    const token = useToken()

    return useQuery({
        queryKey: ['stats', token],
        queryFn: userId ? () => api.get<DailyStats>(consumedProductsRoutes.dailyStats(userId), { headers: { Authorization: `Bearer ${token}` } }) : undefined,
        enabled: !!userId
    })
}
