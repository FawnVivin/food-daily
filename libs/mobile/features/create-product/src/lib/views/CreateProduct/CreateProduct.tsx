import { Fragment } from 'react'
import { Header } from '@food-daily/mobile/ui'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'react-native-paper'

import { createProductFormSchema } from '../../components/CreateProductForm/schemas'
import { CreateProductForm } from '../../components'

import { ButtonWrapper, CreateProductRoot } from './CreateProduct.styles'

import type { CreateProductFormParams } from '../../components/CreateProductForm/CreateProductForm.types'
import type { SubmitHandler} from 'react-hook-form';

const CreateProduct = () => {
  const formMethods = useForm<CreateProductFormParams>({ resolver: zodResolver(createProductFormSchema), mode: 'onTouched' })
const handlePress:SubmitHandler<CreateProductFormParams> = (data) => console.log(data)

  return (
    <Fragment>
      <Header title={'Добавить продукт'} />
      <CreateProductRoot>
        <FormProvider {...formMethods}>
          <CreateProductForm />
          <ButtonWrapper>
            <Button
              mode={'contained'}
              disabled={!formMethods.formState.isValid}
              onPress={formMethods.handleSubmit(handlePress)}
            >
              Создать
            </Button>
          </ButtonWrapper>
        </FormProvider>
      </CreateProductRoot>
    </Fragment>
  )
}

export default CreateProduct
