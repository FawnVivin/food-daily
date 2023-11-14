import { Fragment } from 'react'
import { ScrollView } from 'react-native'
import { Appbar, IconButton } from 'react-native-paper'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { MealType, RootStackParamList, ScreenNavigationProps } from '@food-daily/mobile/types'
import { ProductsList } from '@food-daily/mobile/ui'
import { meals } from '../../fixtures'
import { MealWrapper, PlusButtonWrapper } from './Meal.styles'

const Meal = () => {
  const {params} = useRoute<RouteProp<RootStackParamList,'MealScreen'>>()
  const navigation = useNavigation<ScreenNavigationProps>()
  const handleBackPress = () => navigation.goBack()
  const handlePlusPress = () => navigation.goBack()
  return(
    <Fragment>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleBackPress} />
        <Appbar.Content title={MealType[params.mealType]} />
      </Appbar.Header>
      <ScrollView>
        <MealWrapper>
          <ProductsList products={meals[params.mealType]}/>
        </MealWrapper>
      </ScrollView>
      <PlusButtonWrapper>
        <IconButton icon={'plus'} size={50} mode={'contained-tonal'} onPress={handlePlusPress}/>
      </PlusButtonWrapper>
    </Fragment>
  )
}

export default Meal
