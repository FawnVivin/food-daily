import { HelperText, TextInput } from 'react-native-paper'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'

import { FormDescriptionBlock } from '../FormDescriptionBlock'

import { FormTextInputRoot, FormTextInputWrapper } from './FormTextInput.styles'

import type { FC } from 'react'
import type { FormTextInputProps } from './FormTextInput.types'

const FormTextInput: FC<FormTextInputProps> =
  ({
     control,
     defaultValue,
     name,
     placeholder,
     icon,
     descriptionBlockContent,
     multiline = false,
     errorMessage = '',
     inputType = 'default',
    secureTextEntry = false
   }) => (
    <View>
      <FormTextInputRoot>
        <Controller
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <FormTextInputWrapper
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              defaultValue={String(value)}
              label={placeholder}
              keyboardType={inputType}
              left={icon && <TextInput.Icon icon={icon} />}
              error={!!errorMessage}
              underlineStyle={{display:'none'}}
              secureTextEntry={secureTextEntry}
              multiline={multiline}
            />
          )}
          defaultValue={defaultValue || ''}
          name={name}
        />
        {descriptionBlockContent && <FormDescriptionBlock content={descriptionBlockContent} />}
      </FormTextInputRoot>
      {errorMessage && <HelperText type='error'>
        {errorMessage}
      </HelperText>
      }
    </View>
  )

export default FormTextInput
