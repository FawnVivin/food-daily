import { Text } from 'react-native-paper'

import { FormDescriptionBlockRoot } from './FormDescriptionBlock.styles'

import type { FC } from 'react'
import type { FormDescriptionBlockProps } from './FormDescriptionBlock.types'

const FormDescriptionBlock: FC<FormDescriptionBlockProps> = ({ content }) => (
    <FormDescriptionBlockRoot>
        <Text variant={'titleMedium'}>{content}</Text>
    </FormDescriptionBlockRoot>
  )

export default FormDescriptionBlock
