import { Button } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import { FormTextInput } from '@food-daily/mobile/ui'
import { zodResolver } from '@hookform/resolvers/zod'

import { searchProductFormSchema } from './schemas'
import {
  AddButtonWrapper, SearchProductFormRoot
} from './SearchProductForm.styles'
import { SelectMealType } from './parts'

import type { SubmitHandler } from 'react-hook-form'
import type { SearchProductFormParams } from './SearchProductForm.types'

const SearchProductForm = () => {
  const { control, handleSubmit, formState: { isValid, errors } } = useForm<SearchProductFormParams>({
    resolver: zodResolver(searchProductFormSchema),
    mode: 'onTouched'
  })

  const handlePress: SubmitHandler<SearchProductFormParams> = (data) => {
    console.log(data)
  }

  return (
    <SearchProductFormRoot>
      <FormTextInput
        control={control}
        name={'weight'}
        placeholder={'Введите количество'}
        descriptionBlockContent={'ГР.'}
        errorMessage={errors.weight?.message}
      />
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
