import { BlockRoot } from './Block.styles'

import type { BlockProps } from './Block.types'
import type { FC } from 'react'


const Block:FC<BlockProps> = (props) => (
  <BlockRoot {...props}/>
)

export default Block
