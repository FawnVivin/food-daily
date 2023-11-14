import {Text} from 'react-native-paper'

import { HomeHeaderRoot, UserName } from './HomeHeader.styles'

import type { FC } from 'react'
import type { HomeHeaderProps } from './HomeHeader.types'

const HomeHeader:FC<HomeHeaderProps> = ({name}) => (
    <HomeHeaderRoot>
      <Text variant={'labelMedium'}>И снова здравствуй</Text>
      <UserName>{name}</UserName>
    </HomeHeaderRoot>
  )

export default HomeHeader
