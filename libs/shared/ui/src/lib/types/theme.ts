export type TextColors = {
  main: string
  primary: string
  primaryAccent: string
  secondary: string
  common: string
  disabled: string
  error: string
}

export type BaseColors = {
  white: string
  black: string
}

export type BackgroundColors = {
  main: string
  surface: string
  surfaceLight: string
}

export type BorderColor = {
  main: string
  default: string
}

export type Shape = {
  borderRadius: number
}

export type ZIndex = {
  sidebar: number
  modal: number
  dropdown: number
  tooltip: number
}

export type PaletteColor = {
  light: string
  main: string
  dark: string
  contrastText: string
  actionText: string
}

export type PalettePropsColor =
  | 'disabled'
  | 'negative'
  | 'positive'
  | 'primary'
  | 'waiting'

export type PaletteColors = Record<PalettePropsColor, PaletteColor>

export type Palette = PaletteColors & {
  text: TextColors
  base: BaseColors
  background: BackgroundColors
  borderColor: BorderColor
}

export type Transitions = {
  simple: string
}
