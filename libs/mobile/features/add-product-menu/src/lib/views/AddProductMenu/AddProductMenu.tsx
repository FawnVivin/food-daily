import { Fragment } from 'react'
import { Header, Section } from '@food-daily/mobile/ui'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProps } from '@food-daily/mobile/types'
import { List, Text } from 'react-native-paper'
import { AddProductMenuRoot, MenuItem } from './AddProductMenu.styles'
import { randomFoodFacts } from '../../../../../../constants/src/randomFoodFacts'


const AddProductMenu = () => {
  const navigation = useNavigation<ScreenNavigationProps>()
  const handleSearchPress = () => navigation.navigate('SearchProductsScreen')
  const handleUserProductsPress = () => navigation.navigate('AddUserProductsScreen')
  return (
    <Fragment>
      <Header title={'Добавить продукт'} />
      <AddProductMenuRoot>
        <MenuItem
          onPress={handleSearchPress}
          mode={'contained'}
          icon={'magnify'}
        >
          Найти
        </MenuItem>
        <MenuItem
          onPress={handleUserProductsPress}
          mode={'contained'}
          icon={'heart-multiple-outline'}
        >
          Выбрать из своего списка
        </MenuItem>
        <Section title={'Рандомный факт о еде ♥ :'}>
            <Text>{randomFoodFacts[ Math.floor(Math.random() * randomFoodFacts.length)]}</Text>
        </Section>
      </AddProductMenuRoot>
    </Fragment>
  )
}

export default AddProductMenu
