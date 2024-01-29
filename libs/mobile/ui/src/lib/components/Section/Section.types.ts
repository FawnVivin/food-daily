import type { PropsWithChildren } from 'react'

type HomePageSectionPropsBase = {
  title: string
  className?: string
}

export type HomePageSectionProps = PropsWithChildren<HomePageSectionPropsBase>
