import styled from 'styled-components'
import { View } from 'react-native'
import { Text} from "react-native-paper";


export const HomeRoot = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const HomeTitle = styled(Text)`
  color: ${({theme})=>theme.palette.primary.main};
`
