import { SubmitHandler, useForm } from "react-hook-form";
import { Fragment } from "react";
import { FormSelect, FormTextInput, Header } from "@food-daily/mobile/ui";
import { activityItems, sexItems, targetItems } from "@food-daily/mobile/constants";
import { RegistrationFormSection, RegistrationRoot } from "./Registration.styles";
import { Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { useRegistration } from "@food-daily/mobile/api";
import { ScreenNavigationProps } from "@food-daily/mobile/types";

const Registration = () => {
  const { control,handleSubmit, formState: { errors } } = useForm();
  const {mutate} = useRegistration()
  const navigation = useNavigation<ScreenNavigationProps>();
  const handlePress:SubmitHandler<any> = (data) => {
    mutate(data)
   navigation.navigate('HomeScreen')
  }
  return (
    <Fragment>
      <Header title={"Создание аккаунта"} />
      <RegistrationRoot>
        <RegistrationFormSection title={"Расскажите немного о себе"}>
          <FormTextInput name={"name"} placeholder={"Полное имя"} control={control} icon={'account-details'}  errorMessage={errors.name?.message}/>
          <FormTextInput
            name={"age"}
            placeholder={"Возраст"}
            control={control}
            icon={"calendar-account"}
            errorMessage={errors.age?.message}
            inputType={"numeric"}
          />
          <FormSelect
            label={"Пол"}
            defaultValue={"male"}
            name={"sex"}
            data={sexItems}
            control={control}
            icon={"human-male-female"}
          />
          <FormTextInput
            name={"height"}
            placeholder={"Рост"}
            control={control}
            icon={"human-male-height"}
            descriptionBlockContent={"СМ."}
            errorMessage={errors.height?.message}
            inputType={"numeric"}
          />
          <FormTextInput
            name={"weight"}
            placeholder={"Вес"}
            control={control}
            icon={"weight-kilogram"}
            descriptionBlockContent={" КГ. "}
            errorMessage={errors.weight?.message}
            inputType={"numeric"}
          />
          <FormSelect
            label={"Активность"}
            defaultValue={"minimal"}
            name={"activity"}
            data={activityItems}
            control={control}
            icon={"weight-lifter"}
          />
          <FormSelect
            label={"Цель"}
            defaultValue={"loss"}
            name={"target"}
            data={targetItems}
            control={control}
            icon={"star-shooting-outline"}
          />
        </RegistrationFormSection>
        <RegistrationFormSection title={"Важная информация"}>
          <FormTextInput
            name={"email"}
            placeholder={"Логин"}
            icon={"account-heart-outline"}
            control={control}
            errorMessage={errors.email?.message}
            inputType={"email-address"}
          />
          <FormTextInput
            name={"password"}
            placeholder={"Пароль"}
            control={control}
            icon={"lock-outline"}
            errorMessage={errors.password?.message}
            secureTextEntry
          />
          <Button mode={"contained"} onPress={handleSubmit(handlePress)}>Зарегистрироваться</Button>
        </RegistrationFormSection>
      </RegistrationRoot>
    </Fragment>
  );
};

export default Registration;
