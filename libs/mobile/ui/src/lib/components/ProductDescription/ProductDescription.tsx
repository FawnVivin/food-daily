import { Section } from '../Section'
import { ProductParamsBlock } from '../ProductParamsBlock'

import { DescriptionText } from './DescriptionText'
import { ProductDescriptionRoot } from './ProductDescription.styles'

import type { FC } from 'react'
import type { ProductDescriptionProps } from "./ProductDescription.types";

const ProductDescription: FC<ProductDescriptionProps> = ({ description, ...params }) => (
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
