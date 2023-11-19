import { MealItem } from './parts'
import { MealListRoot } from './MealList.styles'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProps } from '@food-daily/mobile/types'

const MealList = () => {
  const navigation = useNavigation<ScreenNavigationProps>()
  const handlePress = () => navigation.navigate('AddProductMenuScreen')
  return (<MealListRoot>
    <MealItem title={'Завтрак'} description={'Главный прием пищи дня!'} mealType={'breakfast'} />
    <MealItem title={'Обед'} description={'Сейчас бы супчик...)'} mealType={'lunch'} />
    <MealItem title={'Ужин'} description={'Скоро спатки'} mealType={'dinner'} />
    <Button onPress={handlePress} mode={'contained'} icon={'plus'}>Добавить продукт в прием пищи</Button>
  </MealListRoot>)
}

export default MealList
