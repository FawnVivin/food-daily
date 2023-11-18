import styled from 'styled-components'
import { TextInput } from 'react-native-paper'

export const FormTextInputRoot = styled(TextInput)`
  flex: 1;
  border-radius: 15px;
  background-color: ${({theme})=>theme.colors.backdrop};
`
