import { useTheme } from 'react-native-paper'
import { AnimatedCircularProgress } from 'react-native-circular-progress';


import { StatisticsBlockRoot } from './StatisticsBlock.styles'
import { CaloriesProgressContent, PFCBlock } from './parts'

import type { FC } from 'react'
import {currentStats} from '../../fixtures'
import { StatisticsBlockProps } from './StatisticsBlock.types'
const StatisticsBlock:FC<StatisticsBlockProps> = ({userNorms}) => {
  const {colors} = useTheme()
  const caloriesValue = currentStats.calories/userNorms.calorieNorm * 100

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
            currentCalories={currentStats.calories}
            normCalories={userNorms.calorieNorm}
          />
        }
      </AnimatedCircularProgress>
      <PFCBlock {...currentStats}{...userNorms}/>
    </StatisticsBlockRoot>
  )}

export default StatisticsBlock
