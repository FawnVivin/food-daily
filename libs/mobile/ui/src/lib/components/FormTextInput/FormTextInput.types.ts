import type { FieldValues } from 'react-hook-form'

export type FormTextInputProps = FieldValues & {
  defaultValue?: string,
  name: string,
  placeholder: string,
  icon?: string
  descriptionBlockContent?:string
  multiline?:boolean
}
