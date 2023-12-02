import { useForm } from 'react-hook-form'
import { FormTextInput, FormSelect } from '@food-daily/mobile/ui'
import { Button } from 'react-native-paper'
import { zodResolver } from '@hookform/resolvers/zod'

import { sexItems, targetItems } from './constants'
import { ButtonWrapper, ProfileFormRoot } from './ProfileForm.styles'
import { profileFormSchema } from './schemas/profileForm.schema'

import type { SubmitHandler } from 'react-hook-form'
import type { FC } from 'react'
import type { User } from '@food-daily/shared/types'
import { Fragment } from 'react'
import { ScrollView } from 'react-native'
import { ProfileFormParams } from './ProfileForm.types'
import { activityItems } from './constants'

const ProfileForm: FC<User> = ({ sex, activity, height, target, weight, age }) => {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<ProfileFormParams>({
    mode: 'onTouched',
    resolver: zodResolver(profileFormSchema)
  })

  const handlePress: SubmitHandler<ProfileFormParams> = (data) => {
    console.log(data)
  }

  return (
    <Fragment>
      <ScrollView>
        <ProfileFormRoot>
          <FormSelect
            label={'Пол'}
            defaultValue={sex}
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
            errorMessage={errors.age?.message}
            inputType={'numeric'}
          />
          <FormTextInput
            name={'weight'}
            defaultValue={weight}
            placeholder={'Вес'}
            control={control}
            icon={'weight-kilogram'}
            descriptionBlockContent={' КГ. '}
            errorMessage={errors.weight?.message}
            inputType={'numeric'}
          />
          <FormTextInput
            name={'height'}
            defaultValue={height}
            placeholder={'Рост'}
            control={control}
            icon={'human-male-height'}
            descriptionBlockContent={'СМ.'}
            errorMessage={errors.height?.message}
            inputType={'numeric'}
          />
          <FormSelect
            label={'Активность'}
            defaultValue={activity}
            name={'activity'}
            data={activityItems}
            control={control}
            icon={'weight-lifter'}
          />
          <FormSelect
            label={'Цель'}
            defaultValue={target}
            name={'target'}
            data={targetItems}
            control={control}
            icon={'star-shooting-outline'}
          />
        </ProfileFormRoot>
      </ScrollView>
      <ButtonWrapper>
        <Button mode={'contained'} onPress={handleSubmit(handlePress)} disabled={!isValid}>Применить</Button>
      </ButtonWrapper>
    </Fragment>
  )
}

export default ProfileForm
