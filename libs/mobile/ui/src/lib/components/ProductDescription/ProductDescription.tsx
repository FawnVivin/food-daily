import { Section } from '../Section'
import { ProductParamsBlock } from '../ProductParamsBlock'

import { DescriptionText } from './DescriptionText'
import { ProductDescriptionRoot } from './ProductDescription.styles'

import type { Product } from '@food-daily/shared/types'
import type { FC } from 'react'

const ProductDescription: FC<Product> = ({ description, ...params }) => (
    <ProductDescriptionRoot>
      <Section title={'На 100 грамм'}>
        <ProductParamsBlock {...params} />
      </Section>
      <Section title={'Описание'}>
        <DescriptionText>{description}</DescriptionText>
      </Section>
    </ProductDescriptionRoot>
  )

export default ProductDescription
