import { IconButton } from 'react-native-paper'

import { PlusButtonRoot } from './PlusButton.styles'

import type { FC } from 'react'
import type { PlusButtonProps } from './PlusButton.types'

const PlusButton: FC<PlusButtonProps> = ({ onPress }) => (
    <PlusButtonRoot>
      <IconButton
        icon={'plus'}
        size={50}
        mode={'contained-tonal'}
        onPress={onPress} />
    </PlusButtonRoot>
  )

export default PlusButton
