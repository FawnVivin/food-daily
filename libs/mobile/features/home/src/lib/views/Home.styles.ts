import styled from 'styled-components'
import { Text} from "react-native-paper";
import { View } from 'react-native'


export const HomeRoot = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const HomeTitle = styled(Text)`
  color: ${({theme})=>theme.palette.primary.main};
`
