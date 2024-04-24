import { useTheme } from 'react-native-paper'
import { Header, ScreenLoader } from '@food-daily/mobile/ui'
import { ScrollView } from 'react-native'
import { Fragment } from 'react'
import {useGetUser, useGetWeeklyStats} from '@food-daily/mobile/api'

import { Chart } from '../components'

import { StatisticsRoot } from './Statistics.styles'

const Statistics = () => {
  const { colors } = useTheme()
  const { data: user, isSuccess: isUserSuccess, isPending: isUserPending, error: userError } = useGetUser();
  const {data, isPending, isSuccess} = useGetWeeklyStats(user?.id)

  if (isPending || isUserPending || !isSuccess || !isUserSuccess) return <ScreenLoader />
  return (
    <Fragment>
      <Header title={'Статистика'} backButton={false}/>
      <ScrollView>
      <StatisticsRoot>
        <Chart data={data.calories} legend={'Калории за неделю'} suffix={'гр.'}/>
        <Chart data={data.carbohydrates} legend={'Углеводы за неделю'} lineColor={colors.secondaryContainer} suffix={'гр.'}/>
        <Chart data={data.proteins} legend={'Белки за неделю'} lineColor={colors.tertiaryContainer} suffix={'гр.'}/>
        <Chart data={data.fats} legend={'Жиры за неделю'} lineColor={colors.outline} suffix={'гр.'}/>
      </StatisticsRoot>
      </ScrollView>
    </Fragment>
  )
}

export default Statistics
