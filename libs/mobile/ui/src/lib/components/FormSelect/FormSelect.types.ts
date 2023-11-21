import type { FieldValues } from 'react-hook-form'

export type SelectItem = {
  value:string,
  _id:string
}

export type FormSelectProps = FieldValues & {
  name: string,
  label:string,
  placeholder?: string
  data: SelectItem[],
  icon?:string,
  defaultValue:string
}
