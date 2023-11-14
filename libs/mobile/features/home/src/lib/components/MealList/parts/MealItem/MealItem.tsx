import { Text, Avatar, TouchableRipple } from 'react-native-paper'
import { MealItemRoot } from './MealItem.styles'
import { View } from 'react-native'
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@food-daily/mobile/types'
import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { MealItemProps } from './MealItem.types'
const MealItem:FC<MealItemProps> = ({title, description, mealType}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const staticImage = require("../../assets/Dinner.png");
  const handlePress = () => {navigation.navigate('MealScreen', {mealType:mealType})}
  return(
    <TouchableRipple onPress={handlePress}>
      <MealItemRoot >
        {/*<MealImage source={staticImage}/>*/}
        <Avatar.Image size={50} source={require("../../assets/Dinner.png")} />
        <View>
          <Text variant={'titleMedium'}>{title}</Text>
          <Text variant={'labelSmall'}>{description}</Text>
        </View>
      </MealItemRoot>
    </TouchableRipple>
  )}

export default MealItem
