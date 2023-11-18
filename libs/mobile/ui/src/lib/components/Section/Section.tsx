import { SectionRoot, SectionTitle } from './Section.styles'

import type { FC } from 'react'
import type { HomePageSectionProps } from './Section.types'
const Section:FC<HomePageSectionProps> = ({title, children}) => (
  <SectionRoot>
    <SectionTitle variant={'titleMedium'}>{title}</SectionTitle>
    {children}
  </SectionRoot>
)

export default Section
