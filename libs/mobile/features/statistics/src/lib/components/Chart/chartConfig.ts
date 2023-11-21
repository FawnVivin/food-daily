import { useTheme } from 'react-native-paper'

import type { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart'

export const chartConfig = (): AbstractChartConfig =>{
  const {colors} = useTheme()

  return( {
  color: (opacity, index) => `rgba(${colors.surfaceDisabled},${opacity})`,
  backgroundColor: colors.backdrop,
  backgroundGradientFrom: colors.surface,
  backgroundGradientTo: colors.surface,
  decimalPlaces: 1,
  labelColor: () => colors.onBackground
})}
