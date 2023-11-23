import styled from 'styled-components'
import { View } from 'react-native'

export const DefaultViewRoot = styled(View)<{$top:number}>`
  padding-top: ${({$top})=>$top}px;
  padding-left: 36px;
  padding-right: 36px;
  flex:1;
`
