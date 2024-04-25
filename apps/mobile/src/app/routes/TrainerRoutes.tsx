import { Registration } from "@food-daily/mobile/features/registration";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authorization } from "@food-daily/mobile/features/authorization";
import {TrainerPanel} from "@food-daily/mobile/features/trainer-panel"

import type { TrainerStackParamList } from "@food-daily/mobile/types";

const TrainerRoutes = () => {
  const Stack = createNativeStackNavigator<TrainerStackParamList>();

  return(
    <Stack.Group>
      <Stack.Screen name={"AuthorizationScreen"} component={Authorization} />
      <Stack.Screen name={"RegistrationScreen"} component={Registration} />
      <Stack.Screen name={"TrainerPanelScreen"} component={TrainerPanel} />
    </Stack.Group>
  )}

export default TrainerRoutes