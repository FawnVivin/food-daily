import { palette,  shape, zIndex, transitions } from '../tokens'

import type { DefaultTheme } from 'styled-components'

export const createTheme = (): DefaultTheme => ({
  palette,
  shape,
  zIndex,
  transitions
})
