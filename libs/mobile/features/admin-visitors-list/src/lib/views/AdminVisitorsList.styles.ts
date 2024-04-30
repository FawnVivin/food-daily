import { View } from "react-native"
import { Searchbar } from "react-native-paper"
import styled  from "styled-components"

export const SearchWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

export const SearchInput = styled(Searchbar)`
  flex:1;
`