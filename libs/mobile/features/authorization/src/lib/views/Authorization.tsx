import { Button, Text } from "react-native-paper";
import { FormTextInput } from "@food-daily/mobile/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from "@food-daily/mobile/api";

import { authorizationFormSchema } from "./schemas/Authorization.schema";
import { AuthorizationRoot, Title } from "./Authorization.styles";

import type { SubmitHandler } from "react-hook-form";
import type { Login } from "@food-daily/shared/types";
import type { ScreenNavigationProps } from "@food-daily/mobile/types";

export const Authorization = () => {
  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm<Login>({
    mode: "onSubmit",
    resolver: zodResolver(authorizationFormSchema)
  });
  const navigation = useNavigation<ScreenNavigationProps>();
  const { mutate, error } = useLogin();

  const handleAuthPress: SubmitHandler<Login> = (data) => {
    mutate(data, {
      onSuccess() {
        navigation.navigate("HomeScreen");
        reset();
      }
    });
  };

  const handleRegistrationPress = () => {
    navigation.navigate("RegistrationScreen");
  };

  return (
    <AuthorizationRoot>
      <Title>
        <Text>Привет, солнышко 🌞</Text>
        <Text variant={"titleLarge"}>Добро пожаловать</Text>
      </Title>
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
      <Button mode={"contained"} icon={"login"} onPress={handleSubmit(handleAuthPress)} disabled={!isValid}>Войти</Button>
      <Button mode={"contained"} icon={"home-outline"} onPress={handleRegistrationPress}>Регистрация</Button>
      <Text>{error?.message}</Text>
    </AuthorizationRoot>
  );
};
