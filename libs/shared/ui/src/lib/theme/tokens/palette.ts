import { colors } from '../colors'

import type {
  BackgroundColors,
  BaseColors,
  BorderColor,
  Palette,
  PaletteColor,
  PaletteColors,
  TextColors
} from '../../types'

export const hexToRGB = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return `rgb(${r}, ${g}, ${b})`
}

const primary: PaletteColor = {
  light: colors.violet['30'],
  main: colors.violet['50'],
  dark: colors.violet['50'],
  contrastText: colors.base.white,
  actionText: colors.base.white
}
const positive: PaletteColor = {
  light: colors.status.positive,
  main: colors.status.positive,
  dark: colors.status.positive,
  contrastText: colors.base.white,
  actionText: colors.base.white
}
const waiting: PaletteColor = {
  light: colors.status.waiting,
  main: colors.status.waiting,
  dark: colors.status.waiting,
  contrastText: colors.base.white,
  actionText: colors.base.white
}
const negative: PaletteColor = {
  light: colors.status.negative,
  main: colors.status.negative,
  dark: colors.status.negative,
  contrastText: colors.base.white,
  actionText: colors.base.white
}
const disabled: PaletteColor = {
  light: colors.grey['50'],
  main: colors.grey['50'],
  dark: colors.grey['70'],
  contrastText: hexToRGB(colors.grey['30'], 0.4),
  actionText: hexToRGB(colors.grey['30'], 0.4)
}

export const text: TextColors = {
  main: colors.base.white,
  primary: colors.violet['30'],
  primaryAccent: colors.violet['30'],
  secondary: colors.other.orange,
  common: colors.other.red,
  disabled: colors.grey['50'],
  error: colors.status.negative
}

export const baseColors: BaseColors = {
  white: colors.base.white,
  black: colors.base.black
}

export const background: BackgroundColors = {
  surfaceLight: colors.greyBlue['30'],
  surface: colors.greyBlue['50'],
  main: colors.greyBlue['70']
}

export const borderColor: BorderColor = {
  default: colors.violet['50'],
  main: colors.base.white
}

export const paletteColors: PaletteColors = {
  primary,
  positive,
  waiting,
  negative,
  disabled
}

export const palette: Palette = {
  text,
  base: baseColors,
  background,
  borderColor,
  ...paletteColors
}
