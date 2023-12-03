import { ScrollView } from 'react-native'
import { Section } from '@food-daily/mobile/ui'
import { TestUser } from '@food-daily/mobile/fixtures'

import { HomeHeader, MealList, StatisticsBlock, WaterTracker } from '../../components'

import { HomeRoot } from './Home.styles'

import type { RootStackParamList } from '@food-daily/mobile/types'
import type { FC } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { UserNorms } from '@food-daily/shared/types'


const Home: FC<NativeStackScreenProps<RootStackParamList>> = () => {

  const userNorms: UserNorms = {
    calorieNorm: TestUser.calorieNorm,
    carbohydrateNorm: TestUser.carbohydrateNorm,
    proteinNorm: TestUser.proteinNorm,
    fatsNorm: TestUser.fatsNorm
  }

  return (
    <ScrollView>
      <HomeRoot>
        <HomeHeader name={'Виктория Инешина'} />
        <StatisticsBlock userNorms={userNorms} />
        <Section title={'Приемы пищи'}>
          <MealList />
        </Section>
        <Section title={'Трекер воды'}>
          <WaterTracker />
        </Section>
      </HomeRoot>
    </ScrollView>
  )
}

export default Home
