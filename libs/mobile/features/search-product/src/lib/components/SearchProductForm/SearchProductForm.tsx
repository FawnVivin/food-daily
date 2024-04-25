import { Button } from "react-native-paper";
import { useForm } from "react-hook-form";
import { FormSelect, FormTextInput } from "@food-daily/mobile/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateConsumedProduct, useGetUser } from "@food-daily/mobile/api";
import { useNavigation } from "@react-navigation/native";


import { mealTypes } from "./constants/mealTypes";
import { AddButtonWrapper, SearchProductFormRoot } from "./SearchProductForm.styles";
import { searchProductFormSchema } from "./schemas";

import type { ScreenNavigationProps } from "@food-daily/mobile/types";
import type { Meal } from "@food-daily/shared/types";
import type { FC } from "react";
import type { SearchProductFormParams, SearchProductFormProps } from "./SearchProductForm.types";
import type { SubmitHandler } from "react-hook-form";

const SearchProductForm: FC<SearchProductFormProps> = ({ id }) => {
  const { control, handleSubmit, formState: { isValid, errors } } = useForm<SearchProductFormParams>({
    resolver: zodResolver(searchProductFormSchema),
    mode: "onChange"
  });
  const {data:user, isPending, isSuccess} = useGetUser()  
  const { mutate } = useCreateConsumedProduct();
  const navigation = useNavigation<ScreenNavigationProps>()

  const handlePress: SubmitHandler<SearchProductFormParams> = ({ meal, weight }) => {
    const mealType = meal as keyof typeof Meal;

    if (isSuccess && user.visitor) {
      mutate({ visitorId: user.visitor.id, productId: id, meal: mealType, weight }, {onSuccess:()=>navigation.navigate('HomeScreen')});
    }
  };

  return (
    <SearchProductFormRoot>
      <FormTextInput
        control={control}
        name={"weight"}
        placeholder={"Введите количество"}
        descriptionBlockContent={"ГР."}
        errorMessage={errors.weight?.message}
      />
      <FormSelect name={"meal"} label={"Прием пищи"} data={mealTypes} defaultValue={"breakfast"} control={control}
                  icon={"food-outline"} />
      <AddButtonWrapper>
        <Button
          onPress={handleSubmit(handlePress)}
          mode={"contained"}
          disabled={!isValid}
        >
          Добавить
        </Button>
      </AddButtonWrapper>
    </SearchProductFormRoot>
  );
};

export default SearchProductForm;
