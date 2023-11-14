import styled from 'styled-components'
import {List} from 'react-native-paper'
export const ProductItemRoot = styled(List.Item)`
  border-bottom-color: ${({theme})=>theme.colors.onBackground};
  border-bottom-width: 1px;
`
