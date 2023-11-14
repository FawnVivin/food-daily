import {View} from 'react-native'

import { SectionTitle } from './HomePageSection.styles'

import type { FC } from 'react'
import type { HomePageSectionProps } from './HomePageSection.types'
const HomePageSection:FC<HomePageSectionProps> = ({title, children}) => (
  <View>
    <SectionTitle variant={'titleMedium'}>{title}</SectionTitle>
    {children}
  </View>
)

export default HomePageSection
