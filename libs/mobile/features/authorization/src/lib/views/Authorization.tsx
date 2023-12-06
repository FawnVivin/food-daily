import { Button, Text } from 'react-native-paper'
import { FormTextInput } from '@food-daily/mobile/ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store';


import { useLogin } from '../api'

import { authorizationFormSchema } from './schemas/Authorization.schema'
import { AuthorizationRoot, Title } from './Authorization.styles'

import type { Login } from '@food-daily/shared/types'
import type { ScreenNavigationProps } from '@food-daily/mobile/types'
import type { SubmitHandler } from 'react-hook-form'

export const Authorization = () => {
  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm<Login>({
    mode: 'onTouched',
    resolver: zodResolver(authorizationFormSchema)
  })
  const navigation = useNavigation<ScreenNavigationProps>()
  const { mutate, data: resp, isSuccess, error } = useLogin()

  const handlePress: SubmitHandler<Login> = (data) => {
    mutate(data, {
      async onSuccess({access_token:token}) {
        await SecureStore.setItemAsync('token', token)
        navigation.navigate('HomeScreen')
        reset()
      }
    })

  }

  return (
    <AuthorizationRoot>
      <Title>
        <Text>Привет, солнышко 🌞</Text>
        <Text variant={'titleLarge'}>Добро пожаловать</Text>
      </Title>
      <FormTextInput
        name={'email'}
        placeholder={'Логин'}
        icon={'account-heart-outline'}
        control={control}
        errorMessage={errors.email?.message}
        inputType={'email-address'}
      />
      <FormTextInput
        name={'password'}
        placeholder={'Пароль'}
        control={control}
        icon={'lock-outline'}
        errorMessage={errors.password?.message}
        secureTextEntry
      />
      <Button mode={'contained'} icon={'login'} onPress={handleSubmit(handlePress)} disabled={!isValid}>Войти</Button>
      <Text>{error?.message}</Text>
    </AuthorizationRoot>
  )
}
