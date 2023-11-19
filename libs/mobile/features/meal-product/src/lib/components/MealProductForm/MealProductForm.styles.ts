import styled from 'styled-components'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

export const MealProductFormRoot = styled(View)`
  position: relative;
  height: 25%;
  justify-content: space-between;
  padding: 10px 36px 15px 36px;
`

export const MealButtons = styled(View)`
  padding-top: 10px;
  flex-direction: row;
  gap: 25px;
`

export const EditButton = styled(Button)`
  flex: 1;
`

export const DeleteButton = styled(Button)`
  flex: 1;
`
