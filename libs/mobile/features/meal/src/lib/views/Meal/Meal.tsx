import { Fragment } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MealType, ProductScreens } from '@food-daily/mobile/types'
import { Header, PlusButton, ProductsList } from '@food-daily/mobile/ui'
import { meals } from '@food-daily/mobile/fixtures'

import { MealWrapper } from './Meal.styles'

import type { RootStackParamList, ScreenNavigationProps } from '@food-daily/mobile/types';
import type { RouteProp} from '@react-navigation/native';

const Meal = () => {
  const {params} = useRoute<RouteProp<RootStackParamList,'MealScreen'>>()
  const navigation = useNavigation<ScreenNavigationProps>()
  const handlePlusPress = () => navigation.navigate('UserProductsScreen')

  return(
    <Fragment>
      <Header title={MealType[params.mealType]} />
      <ScrollView>
        <MealWrapper>
          <ProductsList
            products={meals[params.mealType]}
            screenType={ProductScreens.mealProduct}/>
        </MealWrapper>
      </ScrollView>
      <PlusButton onPress={handlePlusPress}/>
    </Fragment>
  )
}

export default Meal
