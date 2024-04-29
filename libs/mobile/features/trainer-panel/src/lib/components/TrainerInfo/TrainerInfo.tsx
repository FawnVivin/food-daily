import { useToken } from "@food-daily/mobile/hooks";
import { Button, Icon, Text, useTheme } from "react-native-paper";

import { TextWrapper, TrainerInfoRoot } from "./TrainerInfo.styles";

import type { TrainerType } from "@food-daily/shared/types";
import type { FC } from "react";


const TrainerInfo:FC<TrainerType> = ({name, description}) => {
  const { changeToken } = useToken()
  const {colors} = useTheme()

  const handlePress = () => {
    changeToken('')
  }

  return (
    <TrainerInfoRoot>
      <Icon size={60} source="koala" color={colors.primary} />
      <TextWrapper>
        <Text variant={'titleMedium'}>{name}</Text>
        <Text variant={'labelSmall'}>{description}</Text>
      </TextWrapper>
      <Button mode={'contained'} onPress={handlePress} compact>
        Выйти
      </Button>
    </TrainerInfoRoot>
  )
};

export default TrainerInfo