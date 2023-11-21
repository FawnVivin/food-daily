import { useTheme } from 'react-native-paper'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'

import { chartConfig } from './chartConfig'

import type { FC } from 'react'
import type { ChartProps } from './Chart.types'

const Chart:FC<ChartProps> = ({data,legend,lineColor, suffix=''}) => {
  const { colors } = useTheme()

  return (
    <LineChart
      data={{
        labels: data.labels,
        datasets: [{
          data: data.values,
          color: () => lineColor||colors.onPrimary
        }],
        legend: [legend]
      }}
      yAxisSuffix={suffix}
      height={220}
      width={Dimensions.get('screen').width - 72}
      onDataPointClick={(value) => console.log(value.value)}
      chartConfig={chartConfig()}
      getDotColor={() => colors.onBackground}
      style={{
        borderRadius: 15
      }}
      bezier
    />
  )
}

export default Chart
