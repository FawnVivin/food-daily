import { Fragment } from "react";
import { Header } from "@food-daily/mobile/ui";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "react-native-paper";
import { useCreateProduct, useGetUser } from "@food-daily/mobile/api";
import { useNavigation } from "@react-navigation/native";

import { createProductFormSchema } from "../../components/CreateProductForm/schemas";
import { CreateProductForm } from "../../components";

import { ButtonWrapper, CreateProductRoot } from "./CreateProduct.styles";

import type { CreateProductDto } from "@food-daily/shared/types";
import type { SubmitHandler } from "react-hook-form";

const CreateProduct = () => {
  const { data: user, isSuccess } = useGetUser();
  const formMethods = useForm<CreateProductDto>({ resolver: zodResolver(createProductFormSchema), mode: "onChange" });
  const { mutate } = useCreateProduct();
  const navigation = useNavigation();

  if (!isSuccess) return null;

  const handlePress: SubmitHandler<CreateProductDto> = (data) => {
    mutate({ ...data, authorId: user.id }, { onSuccess: () => navigation.goBack() });
  };

  return (
    <Fragment>
      <Header title={"Создать продукт"} />
      <CreateProductRoot>
        <FormProvider {...formMethods}>
          <CreateProductForm />
          <ButtonWrapper>
            <Button
              mode={"contained"}
              disabled={!formMethods.formState.isValid}
              onPress={formMethods.handleSubmit(handlePress)}
            >
              Создать
            </Button>
          </ButtonWrapper>
        </FormProvider>
      </CreateProductRoot>
    </Fragment>
  );
};

export default CreateProduct;
