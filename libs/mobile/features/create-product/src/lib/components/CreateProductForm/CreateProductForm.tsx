import { useFormContext } from 'react-hook-form'
import { FormTextInput, Section } from '@food-daily/mobile/ui'


import { ProductParams } from './parts/ProductParams'
import { CreateProductFormRoot } from './CreateProductForm.styles'

import type { CreateProductDto } from '@food-daily/shared/types'


const CreateProductForm = () => {
  const { control, formState: { errors } } = useFormContext<Omit<CreateProductDto,'authorId'>>()

  return (
    <CreateProductFormRoot>
      <Section title={'Название продукта:'}>
        <FormTextInput
          name={'name'}
          placeholder={'Название'}
          control={control}
          icon={'playlist-edit'}
          errorMessage={errors.name?.message}
        />
      </Section>
      <Section title={'На 100 грамм:'}>
        <ProductParams />
      </Section>
      <Section title={'Описание:'}>
        <FormTextInput
          name={'description'}
          placeholder={'Описание'}
          control={control}
          errorMessage={errors.description?.message}
          multiline
        />
      </Section>
    </CreateProductFormRoot>
  )
}

export default CreateProductForm
