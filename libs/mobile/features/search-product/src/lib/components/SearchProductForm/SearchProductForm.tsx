import { Button, Divider, Menu, RadioButton } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import { FormDescriptionBlock, FormTextInput } from '@food-daily/mobile/ui'
import { zodResolver } from '@hookform/resolvers/zod'

import { searchProductFormSchema } from './schemas'
import {
  AddButtonWrapper, SearchProductFormRoot,
  TextInputWrapper
} from './SearchProductForm.styles'

import type { SubmitHandler } from 'react-hook-form'
import type { SearchProductFormParams } from './SearchProductForm.types'
import { useState } from 'react'
import { SelectMealType } from './parts'

const SearchProductForm = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('breakfast')
  const { control, handleSubmit, formState: { isValid } } = useForm<SearchProductFormParams>({
    resolver: zodResolver(searchProductFormSchema)
  })

  const handlePress: SubmitHandler<SearchProductFormParams> = (data) => {
    console.log(data)
  }

  return (
    <SearchProductFormRoot>
      <TextInputWrapper>
        <FormTextInput
          control={control}
          name={'weight'}
          placeholder={'Введите количество'}
        />
        <FormDescriptionBlock content={'ГР.'} />
      </TextInputWrapper>
      <SelectMealType control={control} />
      <AddButtonWrapper>
        <Button
          onPress={handleSubmit(handlePress)}
          mode={'contained'}
          disabled={!isValid}
        >
          Добавить
        </Button>
      </AddButtonWrapper>
    </SearchProductFormRoot>
  )
}

export default SearchProductForm
