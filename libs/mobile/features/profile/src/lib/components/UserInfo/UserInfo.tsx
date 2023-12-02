import { Avatar, Button, Text } from 'react-native-paper'
import { Target } from '@food-daily/mobile/types'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { MainInfoWrapper, UserInfoRoot } from './UserInfo.styles'

import type { User } from '@food-daily/shared/types';
import type { FC } from 'react'
import type { ScreenNavigationProps } from '@food-daily/mobile/types'
import { targetItems } from '../ProfileForm/constants'

const UserInfo: FC<User> = ({ name, target }) => {
  const navigation = useNavigation<ScreenNavigationProps>()
  const handlePress = () => navigation.navigate('AuthorizationScreen')

  return(
    <UserInfoRoot>
      <MainInfoWrapper>
        <Avatar.Image size={55} source={require('./assets/Breakfast.png')} />
        <View>
          <Text variant={'titleMedium'}>{name}</Text>
          <Text variant={'labelSmall'}>{Target[target]}</Text>
        </View>
      </MainInfoWrapper>
      <Button mode={'contained'} onPress={handlePress} compact>Выйти</Button>
    </UserInfoRoot>
  )}

export default UserInfo
