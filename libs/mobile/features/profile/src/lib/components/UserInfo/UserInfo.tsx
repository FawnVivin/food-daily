import { Avatar, Button, Text } from 'react-native-paper'
import { Target } from '@food-daily/shared/types'
import { View } from 'react-native'

import { MainInfoWrapper, UserInfoRoot } from './UserInfo.styles'

import type { User } from '@food-daily/shared/types';
import type { FC } from 'react'

const UserInfo: FC<User> = ({ name, target }) => (
    <UserInfoRoot>
      <MainInfoWrapper>
        <Avatar.Image size={55} source={require('./assets/Breakfast.png')} />
        <View>
          <Text variant={'titleMedium'}>{name}</Text>
          <Text variant={'labelSmall'}>{Target[target]}</Text>
        </View>
      </MainInfoWrapper>
      <Button mode={'contained'} compact>Выйти</Button>
    </UserInfoRoot>
  )

export default UserInfo
