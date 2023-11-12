import { View } from 'react-native'
import { Button } from 'react-native-paper'

import type { FC } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@food-daily/mobile/types'

export const Authorization:FC<NativeStackScreenProps<RootStackParamList>> = ({navigation}) => (
    <View>
      <Button onPress={()=>navigation.navigate('HomeScreen')}>Go home</Button>
    </View>
  )
