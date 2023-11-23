import { Button, Text } from 'react-native-paper'
import { FormTextInput } from '@food-daily/mobile/ui'
import { AuthorizationRoot, Title } from './Authorization.styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthorizationFormParams } from './Authorization.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { authorizationFormSchema } from './schemas/Authorization.schema'
import { useNavigation } from '@react-navigation/native'
import {ScreenNavigationProps} from '@food-daily/mobile/types'
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
        errorMessage = {errors['login']?.message}
        inputType={'email-address'}
      />
      <FormTextInput name={'password'} placeholder={'Пароль'} control={control} icon={'lock-outline'} secureTextEntry />
      <Button mode={'contained'} icon={'login'} onPress={handleSubmit(handlePress)}>Войти</Button>
    </AuthorizationRoot>
  )
}
