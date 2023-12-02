import { FormTextInput } from '@food-daily/mobile/ui'
import { useFormContext } from 'react-hook-form'

import { ProductParamsRoot } from './ProductParams.styles'
import { CreateProductDto } from '@food-daily/shared/types'




const ProductParams = () => {
  const { control, formState:{errors} } = useFormContext<Omit<CreateProductDto,'authorId'>>()

  return (
      <ProductParamsRoot>
        <FormTextInput
          name={'calories'}
          placeholder={'Калории'}
          control={control}
          icon={'fire'}
          errorMessage={errors.calories?.message}
          descriptionBlockContent={'ГР.'}
          inputType={'numeric'}
        />
        <FormTextInput
          name={'proteins'}
          placeholder={'Белки'}
          control={control}
          icon={'food-steak'}
          errorMessage={errors.proteins?.message}
          descriptionBlockContent={'ГР.'}
          inputType={'numeric'}
        />
        <FormTextInput
          name={'fats'}
          placeholder={'Жиры'}
          control={control}
          icon={'water'}
          errorMessage={errors.fats?.message}
          descriptionBlockContent={'ГР.'}
          inputType={'numeric'}
        />
        <FormTextInput
          name={'carbohydrates'}
          placeholder={'Углеводы'}
          control={control}
          icon={'cookie'}
          errorMessage={errors.carbohydrates?.message}
          descriptionBlockContent={'ГР.'}
          inputType={'numeric'}
        />
      </ProductParamsRoot>
  )
}

export default ProductParams
