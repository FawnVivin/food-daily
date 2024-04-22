import { Button, IconButton, Text } from "react-native-paper";
import { Fragment, useEffect, useState } from "react";
import { DialogBlock, ScreenLoader } from "@food-daily/mobile/ui";
import { useGetWaterQuantity, useUpdateWaterQuantity } from "@food-daily/mobile/api";

import { Content, CountText, PostfixText, WaterTrackerRoot } from "./WaterTracker.styles";

import type { FC} from "react";
import type { WaterTrackerProps } from "./WaterTracker.types";

const WaterTracker: FC<WaterTrackerProps> = ({ userId }) => {

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const color = "#8CC4DF";
  const hideSuccessDialog = () => setShowSuccessDialog(false);
  const { data: water, isSuccess, isLoading } = useGetWaterQuantity(userId);
  const { mutate } = useUpdateWaterQuantity();
  const [waterCount, setWaterCount] = useState(0);

  useEffect(() => {
    if (isSuccess) {
      setWaterCount(water.quantity);
    }
  }, [isSuccess]);

  const handleSave = () => {
    const body = { quantity: waterCount, userId };

    mutate(body, { onSuccess: () => setShowSuccessDialog(true) });
  };

  const handleMinus = () => {
    const newCount = waterCount - 200;

    if (newCount >= 0) {
      setWaterCount(newCount);
    }
  };
  const handlePlus = () => setWaterCount(waterCount + 200);

if (!isSuccess||isLoading) return <ScreenLoader/>
  return (
    <Fragment>
      <WaterTrackerRoot>
        <IconButton
          icon={"minus"}
          mode={"contained"}
          onPress={handleMinus}
          containerColor={color}
          iconColor={"white"} />
        <Content>
          <Text>Вы выпили</Text>
          <CountText variant={"headlineMedium"}>
            {waterCount}
            <PostfixText style={{ fontSize: 10 }}>мл.</PostfixText>
          </CountText>
        </Content>
        <IconButton
          icon={"plus"}
          mode={"contained"}
          onPress={handlePlus}
          containerColor={color}
          iconColor={"white"}
        />
      </WaterTrackerRoot>
      <Button
        mode={"contained"}
        buttonColor={color}
        textColor={"white"}
        icon={"water"}
        onPress={handleSave}
      >
        Сохранить
      </Button>
      <DialogBlock hideDialog={hideSuccessDialog} show={showSuccessDialog}>Данные успешно обновлены ♥</DialogBlock>
    </Fragment>
  );
};

export default WaterTracker;
