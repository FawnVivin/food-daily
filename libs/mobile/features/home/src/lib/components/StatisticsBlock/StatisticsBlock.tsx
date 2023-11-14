import { useTheme } from 'react-native-paper'
import { AnimatedCircularProgress } from 'react-native-circular-progress';


import { StatisticsBlockRoot } from './StatisticsBlock.styles'
import { CaloriesProgressContent, PFCBlock } from './parts'

import type { StatisticsBlockProps } from './StatisticsBlock.types'
import type { FC } from 'react'

const StatisticsBlock:FC<StatisticsBlockProps> = ({stats}) => {
  const {colors} = useTheme()
  const caloriesValue = stats.currentCalories/stats.normCalories * 100

  return(
    <StatisticsBlockRoot>
      <AnimatedCircularProgress
        size={196}
        width={10}
        fill={caloriesValue}
        tintColor={colors.primaryContainer}
        backgroundColor={colors.onBackground}
      >
        {()=>
          <CaloriesProgressContent
            currentCalories={stats.currentCalories}
            normCalories={stats.normCalories}
          />
        }
      </AnimatedCircularProgress>
      <PFCBlock {...stats}/>
    </StatisticsBlockRoot>
  )}

export default StatisticsBlock
