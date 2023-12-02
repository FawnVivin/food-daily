import { Button } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import { FormSelect, FormTextInput } from '@food-daily/mobile/ui'
import { zodResolver } from '@hookform/resolvers/zod'

import { searchProductFormSchema } from './schemas'
import {
  AddButtonWrapper, SearchProductFormRoot
} from './SearchProductForm.styles'
import { mealTypes } from './constants/mealTypes'

import type { SubmitHandler } from 'react-hook-form'
import { SearchProductFormParams } from './SearchProductForm.types'

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
      <FormSelect name={'meal'} label={'Прием пищи'} data={mealTypes} defaultValue={'Завтрак'} control = {control} icon={'food-outline'}/>
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
