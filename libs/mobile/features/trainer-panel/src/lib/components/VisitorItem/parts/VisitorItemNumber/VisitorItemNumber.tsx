import { NumberText, VisitorItemNumberRoot } from './VisitorItemNumber.styles'

import type { VisitorItemNumberProps } from './VisitorItemNumber.types'
import type { FC } from 'react'

const VisitorItemNumber: FC<VisitorItemNumberProps> = ({ itemNumber }) => (
    <VisitorItemNumberRoot>
      <NumberText variant={'titleLarge'}>{itemNumber}</NumberText>
    </VisitorItemNumberRoot>
  )

export default VisitorItemNumber
