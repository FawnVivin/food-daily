import { Button, Text } from 'react-native-paper'
import { FormTextInput } from '@food-daily/mobile/ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'


import { authorizationFormSchema } from './schemas/Authorization.schema'
import { AuthorizationRoot, Title } from './Authorization.styles'

import type {ScreenNavigationProps} from '@food-daily/mobile/types'
import type { AuthorizationFormParams } from './Authorization.types'
import type { SubmitHandler} from 'react-hook-form';

export const Authorization = () => {
  const { control, handleSubmit, reset, formState:{errors} } = useForm<AuthorizationFormParams>({mode: 'onTouched', resolver: zodResolver(authorizationFormSchema)})
  const navigation = useNavigation<ScreenNavigationProps>()

  const handlePress:SubmitHandler<AuthorizationFormParams> = (data) => {
    console.log(data)
    navigation.navigate('HomeScreen')
    reset()
  }

  return (
    <AuthorizationRoot>
      <Title>
        <Text>Привет, солнышко 🌞</Text>
        <Text variant={'titleLarge'}>Добро пожаловать</Text>
      </Title>
      <FormTextInput
        name={'login'}
        placeholder={'Логин'}
        icon={'account-heart-outline'}
        control={control}
        errorMessage = {errors.login?.message}
        inputType={'email-address'}
      />
      <FormTextInput
        name={'password'}
        placeholder={'Пароль'}
        control={control}
        icon={'lock-outline'}
        errorMessage = {errors.password?.message}
        secureTextEntry
      />
      <Button mode={'contained'} icon={'login'} onPress={handleSubmit(handlePress)}>Войти</Button>
    </AuthorizationRoot>
  )
}
