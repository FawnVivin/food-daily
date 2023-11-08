import 'styled-components'
import { MD3Theme as PaperDefaultTheme } from 'react-native-paper'
import type { Palette, Shape, ZIndex, Transitions } from '../types'
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette
    shape: Shape
    zIndex: ZIndex
    transitions: Transitions
  }
}
