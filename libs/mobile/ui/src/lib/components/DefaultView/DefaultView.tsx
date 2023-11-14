import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { DefaultViewRoot } from './DefaultView.styles'

import type { DefaultViewProps } from './DefaultView.types'
import type { FC } from 'react'


const DefaultView:FC<DefaultViewProps> = (props) => {
  const {top} = useSafeAreaInsets();
  return(
    <DefaultViewRoot {...props} $top={top}/>
)}

export default DefaultView
