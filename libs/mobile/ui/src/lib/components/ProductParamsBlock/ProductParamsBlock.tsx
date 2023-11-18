import { CaloriesBlock, MacroNutrients, ProductParamsBlockRoot } from './ProductParamsBlock.styles'
import { ParamItem } from './parts'

import type { FC } from 'react'
import type { ProductParams } from '@food-daily/shared/types'


const ProductParamsBlock: FC<ProductParams> = ({ carbohydrates, calories, proteins, fats }) => (
    <ProductParamsBlockRoot>
      <CaloriesBlock>
        <ParamItem title={'Калорий'} value={calories} size={'lg'} />
      </CaloriesBlock>
      <MacroNutrients>
        <ParamItem title={'Белков'} value={proteins} postfix={' гр.'} />
        <ParamItem title={'Жиров'} value={fats} postfix={' гр.'} />
        <ParamItem title={'Углеводов'} value={carbohydrates} postfix={' гр.'} />
      </MacroNutrients>
    </ProductParamsBlockRoot>
  )

export default ProductParamsBlock
