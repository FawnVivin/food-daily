import { List } from "react-native-paper";
import styled from "styled-components";

export const VisitorItemRoot = styled(List.Item)`
  border-bottom-color: ${({theme})=>theme.colors.onBackground};
  border-bottom-width: 1px;
`