import styled from 'styled-components'
import { View } from 'react-native'

export const FormDescriptionBlockRoot = styled(View)`
  padding: 15px;
  border-radius: 15px;
  background-color: ${({theme})=>theme.colors.onPrimary};
`
