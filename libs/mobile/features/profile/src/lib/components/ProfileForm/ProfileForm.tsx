import { useForm } from 'react-hook-form'
import { FormTextInput, FormSelect } from '@food-daily/mobile/ui'
import { Button } from 'react-native-paper'
import { Sex, Target } from '@food-daily/shared/types'
import { zodResolver } from '@hookform/resolvers/zod'

import { sexItems, targetItems } from './constants'
import { ProfileFormRoot } from './ProfileForm.styles'
import { profileFormSchema } from './schemas/profileForm.schema'

import type { SubmitHandler } from 'react-hook-form'
import type { FC } from 'react'
import type { User } from '@food-daily/shared/types';

const ProfileForm: FC<User> = ({ sex, height, target, weight, age }) => {
  const { control, handleSubmit, formState:{errors, isValid} } = useForm({ mode: 'onTouched', resolver: zodResolver(profileFormSchema) })

  const handlePress: SubmitHandler<any> = (data) => {
    console.log(data)
  }

  return (
    <ProfileFormRoot>
      <FormSelect
        label={'Пол'}
        defaultValue={Sex[sex]}
        name={'sex'}
        data={sexItems}
        control={control}
        icon={'human-male-female'}
      />
      <FormTextInput
        name={'age'}
        defaultValue={age}
        placeholder={'Возраст'}
        control={control}
        icon={'calendar-account'}
        errorMessage = {errors.age?.message}
        inputType={'numeric'}
      />
      <FormTextInput
        name={'weight'}
        defaultValue={weight}
        placeholder={'Вес'}
        control={control}
        icon={'weight-kilogram'}
        descriptionBlockContent={' КГ. '}
        errorMessage = {errors.weight?.message}
        inputType={'numeric'}
      />
      <FormTextInput
        name={'height'}
        defaultValue={height}
        placeholder={'Рост'}
        control={control}
        icon={'human-male-height'}
        descriptionBlockContent={'СМ.'}
        errorMessage = {errors.height?.message}
        inputType={'numeric'}
      />
      <FormSelect
        label={'Цель'}
        defaultValue={Target[target]}
        name={'target'}
        data={targetItems}
        control={control}
        icon={'star-shooting-outline'}
      />
      <Button mode={'contained'} onPress={handleSubmit(handlePress)} disabled={!isValid}>Применить</Button>
    </ProfileFormRoot>
  )
}

export default ProfileForm
