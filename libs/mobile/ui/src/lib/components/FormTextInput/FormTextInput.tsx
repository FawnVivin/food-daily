import { TextInput } from 'react-native-paper'
import { Controller } from 'react-hook-form'

import { FormTextInputRoot } from './FormTextInput.styles'

import type { FC } from 'react'
import type { FormTextInputProps } from './FormTextInput.types'

const FormTextInput: FC<FormTextInputProps> = ({ control, defaultValue, name, placeholder, icon }) => (
    <Controller
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <FormTextInputRoot
          left={icon && <TextInput.Icon icon={icon} />}
          onChangeText={onChange}
          onBlur={onBlur}
          value={String(value)}
          placeholder={placeholder}
          underlineColor={'transparent'}
          activeUnderlineColor={'transparent'}
        />
      )}
      defaultValue={defaultValue?defaultValue:''}
      name={name}
    />
  )

export default FormTextInput
