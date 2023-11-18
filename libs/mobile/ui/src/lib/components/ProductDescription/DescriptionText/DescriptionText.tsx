import { Text } from 'react-native-paper'
import { View } from 'react-native'

import type { FC, PropsWithChildren } from 'react'

const DescriptionText: FC<PropsWithChildren> = ({ children }) => (
    <View>
      <Text>
        {children}
      </Text>
    </View>
  )

export default DescriptionText
