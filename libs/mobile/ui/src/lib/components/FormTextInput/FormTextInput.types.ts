import type { KeyboardType } from 'react-native'
import type { FieldValues } from 'react-hook-form'

export type FormTextInputProps = FieldValues & {
  defaultValue?: number | string,
  name: string,
  placeholder: string,
  icon?: string
  descriptionBlockContent?:string
  multiline?:boolean
  inputType?:KeyboardType
}
