import styled from 'styled-components'
import { Button } from 'react-native-paper'

export const SelectMealTypesButton = styled(Button)`
  margin-top: 10px;
  height: 50px;
  justify-content: center;
  border-radius: 15px;
  background-color: ${({theme})=>theme.colors.backdrop};
`
