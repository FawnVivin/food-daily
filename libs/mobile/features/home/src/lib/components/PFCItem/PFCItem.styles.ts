import styled from 'styled-components'
import { ProgressBar, Text } from 'react-native-paper'
import { View } from 'react-native'

export const PFCItemRoot = styled(View)`
  align-items: center;
`

export const StatProgressBar = styled(ProgressBar)`
  height: 13px;
  width: 70px;
  border-radius: 20px;
  margin: 3px 0;
`

export const MaxValueText = styled(Text)<{$color:string}>`
  color: ${({$color})=>$color};
`
