import { FormTextInput } from '@food-daily/mobile/ui'
import { useFormContext } from 'react-hook-form'

import { ProductParamsRoot } from './ProductParams.styles'

import type { CreateProductFormParams } from '../../CreateProductForm.types'


const ProductParams = () => {
  const { control, formState:{errors} } = useFormContext<CreateProductFormParams>()

  return (
      <ProductParamsRoot>
        <FormTextInput
          name={'calories'}
          placeholder={'Калории'}
          control={control}
          icon={'fire'}
          errorMessage={errors.calories?.message}
          descriptionBlockContent={'ГР.'}
        />
        <FormTextInput
          name={'proteins'}
          placeholder={'Белки'}
          control={control}
          icon={'food-steak'}
          errorMessage={errors.proteins?.message}
          descriptionBlockContent={'ГР.'}
        />
        <FormTextInput
          name={'fats'}
          placeholder={'Жиры'}
          control={control}
          icon={'water'}
          errorMessage={errors.fats?.message}
          descriptionBlockContent={'ГР.'}
        />
        <FormTextInput
          name={'carbohydrates'}
          placeholder={'Углеводы'}
          control={control}
          icon={'cookie'}
          errorMessage={errors.carbohydrates?.message}
          descriptionBlockContent={'ГР.'}
        />
      </ProductParamsRoot>
  )
}

export default ProductParams
