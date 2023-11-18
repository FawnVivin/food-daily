import { useTheme } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import { FormDescriptionBlock, FormTextInput } from '@food-daily/mobile/ui'
import { zodResolver } from '@hookform/resolvers/zod'

import { DeleteButton, EditButton, MealButtons, MealProductFormRoot, TextInputWrapper } from './MealProductForm.styles'
import { mealProductFormSchema } from './schemas'

import type { SubmitHandler} from 'react-hook-form';
import type { FC } from 'react'
import type { MealProductFormParams, MealProductFormProps } from './MealProductForm.types'

const MealProductForm: FC<MealProductFormProps> = ({ weight }) => {
  const { control, handleSubmit, formState: { isValid } } = useForm<MealProductFormParams>({
    resolver: zodResolver(mealProductFormSchema)
  })
  const { colors } = useTheme()

  const handlePress: SubmitHandler<MealProductFormParams> = (data) => {
    alert(data)
  }

  return (
    <MealProductFormRoot>
      <TextInputWrapper>
        <FormTextInput
          control={control}
          name={'weight'}
          placeholder={'Введите количество'}
          defaultValue={String(weight)}
        />
        <FormDescriptionBlock content={'ГР.'} />
      </TextInputWrapper>
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
