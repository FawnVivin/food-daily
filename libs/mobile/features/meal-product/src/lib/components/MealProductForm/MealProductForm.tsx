import { useTheme } from "react-native-paper";
import { useForm } from "react-hook-form";
import { DialogBlock, FormTextInput } from "@food-daily/mobile/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useDeleteConsumedProduct, useUpdateConsumedProduct } from "@food-daily/mobile/api";
import { useNavigation } from "@react-navigation/native";

import { DeleteButton, EditButton, MealButtons, MealProductFormRoot } from "./MealProductForm.styles";
import { mealProductFormSchema } from "./schemas";

import type { FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { MealProductFormProps } from "./MealProductForm.types";
import type { UpdateConsumedProductDto } from "@food-daily/shared/types";

const MealProductForm: FC<MealProductFormProps> = ({ weight, id }) => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const { control, handleSubmit, formState: { isValid, errors } } = useForm<UpdateConsumedProductDto>({
    resolver: zodResolver(mealProductFormSchema),
    mode: "onChange"
  });
  const navigation = useNavigation();
  const { mutate: updateProduct } = useUpdateConsumedProduct(id)
  const { mutate: deleteProduct } = useDeleteConsumedProduct(id);
  const { colors } = useTheme();

  const handleUpdate: SubmitHandler<UpdateConsumedProductDto> = (data) => {
    updateProduct(data, { onSuccess: () => setShowSuccessDialog(true), onError: () => setShowErrorDialog(true) });
  };

  const handleDelete = () => {
    deleteProduct(undefined, { onSuccess: () => navigation.goBack() });
  };
  const hideSuccessDialog = () => setShowSuccessDialog(false);
  const hideErrorDialog = () => setShowErrorDialog(false);

  return (
    <MealProductFormRoot>
      <FormTextInput
        control={control}
        name={"weight"}
        placeholder={"Введите количество"}
        defaultValue={weight}
        descriptionBlockContent={"ГР."}
        errorMessage={errors.weight?.message}
        inputType={"numeric"}
      />
      <MealButtons>
        <DeleteButton
          onPress={handleDelete}
          mode={"contained"}
          buttonColor={colors.tertiaryContainer}
          disabled={!isValid}
          textColor={colors.onTertiaryContainer}
        >
          Удалить
        </DeleteButton>
        <EditButton
          onPress={handleSubmit(handleUpdate)}
          mode={"contained"}
          buttonColor={colors.secondaryContainer}
          disabled={!isValid}
          textColor={colors.onSecondaryContainer}
        >
          Изменить
        </EditButton>
      </MealButtons>
      <DialogBlock hideDialog={hideSuccessDialog} show={showSuccessDialog}>Данные успешно обновлены ♥</DialogBlock>
      <DialogBlock hideDialog={hideErrorDialog} show={showErrorDialog}>Прости, произошла ошибка(((</DialogBlock>
    </MealProductFormRoot>
  );
};

export default MealProductForm;
