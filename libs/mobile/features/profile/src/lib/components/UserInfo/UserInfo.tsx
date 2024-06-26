import { Avatar, Button, Text } from "react-native-paper";
import { Target } from "@food-daily/mobile/types";
import { View } from "react-native";
import { useToken } from "@food-daily/mobile/hooks";

import { MainInfoWrapper, UserInfoRoot } from "./UserInfo.styles";

import type { Visitor } from "@food-daily/shared/types";
import type { FC } from "react";

const UserInfo: FC<Visitor> = ({ name, target }) => {
  const { changeToken } = useToken()

  const handlePress = () => {
    changeToken('')
  }

  return (
    <UserInfoRoot>
      <MainInfoWrapper>
        <Avatar.Image size={55} source={require("./assets/Breakfast.png")} />
        <View>
          <Text variant={"titleMedium"}>{name}</Text>
          <Text variant={"labelSmall"}>{Target[target]}</Text>
        </View>
      </MainInfoWrapper>
      <Button mode={"contained"} onPress={handlePress} compact>Выйти</Button>
    </UserInfoRoot>
  );
};

export default UserInfo;
