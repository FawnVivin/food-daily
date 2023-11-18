import { Appbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import type { ScreenNavigationProps } from '@food-daily/mobile/types'
import type { FC } from 'react'
import type { HeaderProps } from './Header.types'

const Header: FC<HeaderProps> = ({ title, backButton = true }) => {
  const navigation = useNavigation<ScreenNavigationProps>()
  const handleBackPress = () => navigation.goBack()

  return (
    <Appbar.Header>
      {backButton && <Appbar.BackAction onPress={handleBackPress} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}

export default Header
