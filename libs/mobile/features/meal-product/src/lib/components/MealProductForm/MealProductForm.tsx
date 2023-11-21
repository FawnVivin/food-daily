import { useTheme } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import { FormTextInput } from '@food-daily/mobile/ui'
import { zodResolver } from '@hookform/resolvers/zod'

import { DeleteButton, EditButton, MealButtons, MealProductFormRoot } from './MealProductForm.styles'
import { mealProductFormSchema } from './schemas'

import type { SubmitHandler } from 'react-hook-form'
import type { FC } from 'react'
import type { MealProductFormProps } from './MealProductForm.types'

const MealProductForm: FC<MealProductFormProps> = ({ weight }) => {
  const { control, handleSubmit, formState: { isValid, errors } } = useForm<MealProductFormProps>({
    resolver: zodResolver(mealProductFormSchema),
    mode:'onTouched'
  })
  const { colors } = useTheme()

  const handlePress: SubmitHandler<MealProductFormProps> = (data) => {
    alert(data)
  }

  return (
    <MealProductFormRoot>
      <FormTextInput
        control={control}
        name={'weight'}
        placeholder={'Введите количество'}
        defaultValue={String(weight)}
        descriptionBlockContent={'ГР.'}
        errorMessage={errors.weight?.message}
        inputType={'numeric'}
      />
      <MealButtons>
        <DeleteButton
          onPress={handleSubmit(handlePress)}
          mode={'contained'}
          buttonColor={colors.secondaryContainer}
          disabled={!isValid}
          textColor={colors.onSecondaryContainer}
        >
          Удалить
        </DeleteButton>
        <EditButton
          onPress={handleSubmit(handlePress)}
          mode={'contained'}
          buttonColor={colors.tertiaryContainer}
          disabled={!isValid}
          textColor={colors.onTertiaryContainer}
        >
          Изменить
        </EditButton>
      </MealButtons>
    </MealProductFormRoot>
  )
}

export default MealProductForm
