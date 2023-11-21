import { useTheme } from 'react-native-paper'
import { Header } from '@food-daily/mobile/ui'
import { ScrollView } from 'react-native'
import { Fragment } from 'react'
import { caloriesData, waterData, weightData } from '@food-daily/mobile/fixtures'

import { Chart } from '../components'

import { StatisticsRoot } from './Statistics.styles'

const Statistics = () => {
  const { colors } = useTheme()

  return (
    <Fragment>
      <Header title={'Статистика'} backButton={false}/>
      <ScrollView>
      <StatisticsRoot>
        <Chart data={caloriesData} legend={'Калории за неделю'}/>
        <Chart data={weightData} legend={'Вес за неделю'} lineColor={colors.secondaryContainer} suffix={'кг'}/>
        <Chart data={waterData} legend={'Потребление воды за неделю'} lineColor={colors.tertiaryContainer} suffix={'л'}/>
      </StatisticsRoot>
      </ScrollView>
    </Fragment>
  )
}

export default Statistics
