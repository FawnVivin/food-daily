import { useTheme } from 'react-native-paper'
import { Header, ScreenLoader } from '@food-daily/mobile/ui'
import { ScrollView } from 'react-native'
import { Fragment } from 'react'
import { useGetWeeklyStats} from '@food-daily/mobile/api'
import { useRoute } from '@react-navigation/native'

import { Chart } from '../components'

import { StatisticsRoot } from './Statistics.styles'

import type { CommonParamList } from '@food-daily/mobile/types'
import type { RouteProp} from '@react-navigation/native';

const Statistics = () => {
  const { params } = useRoute<RouteProp<CommonParamList, "StatisticsScreen">>();
  const { colors } = useTheme()
  const { data, isPending, isSuccess } = useGetWeeklyStats(params.visitorId)

  if (isPending ||!isSuccess) return <ScreenLoader />
  return (
    <Fragment>
      <Header title={'Статистика'} backButton={false}/>
      <ScrollView>
      <StatisticsRoot>
        <Chart data={data.calories} legend={'Калории за неделю, ккал.'}/>
        <Chart data={data.carbohydrates} legend={'Углеводы за неделю, гр.'} lineColor={colors.secondaryContainer}/>
        <Chart data={data.proteins} legend={'Белки за неделю, гр.'} lineColor={colors.tertiaryContainer}/>
        <Chart data={data.fats} legend={'Жиры за неделю, гр.'} lineColor={colors.outline}/>
      </StatisticsRoot>
      </ScrollView>
    </Fragment>
  )
}

export default Statistics
