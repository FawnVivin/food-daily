import { FC, useState } from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import { Divider, Menu, RadioButton, Text } from 'react-native-paper'
import { SelectMealTypesButton } from './SelectMealTypes.styles'
import { Meals, MealType } from '@food-daily/mobile/types'


const SelectMealType: FC<FieldValues> = ({ control }) => {
  const [visible, setVisible] = useState(false)
  const handlePress = () => setVisible(!visible)
  return (
    <Controller
      control={control}
      render={
        ({ field: { onChange, value } }) => (
          <Menu
            visible={visible}
            onDismiss={handlePress}
            anchor={
              <SelectMealTypesButton onPress={handlePress}>
                <Text>{Meals[value as MealType]}</Text>
              </SelectMealTypesButton>}
          >
            <RadioButton.Group onValueChange={onChange} value={value}>
              <RadioButton.Item mode={'ios'} label='Завтрак' value='breakfast' />
              <Divider />
              <RadioButton.Item mode={'ios'} label='Обед' value='lunch' />
              <Divider />
              <RadioButton.Item mode={'ios'} label='Ужин' value='dinner' />
            </RadioButton.Group>
          </Menu>
        )
      }
      name={'mealType'}
      defaultValue={'breakfast'}
    />
  )
}

export default SelectMealType
