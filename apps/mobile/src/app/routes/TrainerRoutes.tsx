import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authorization } from "@food-daily/mobile/features/authorization";
import {TrainerPanel} from "@food-daily/mobile/features/trainer-panel"
import { useToken } from "@food-daily/mobile/hooks";
import { Registration } from "@food-daily/mobile/features/registration";
import { Fragment } from "react";
import { Statistics } from "@food-daily/mobile/features/statistics";

import type { TrainerStackParamList } from "@food-daily/mobile/types";

const TrainerRoutes = () => {
  const { isTokenExist } = useToken();
  const Stack = createNativeStackNavigator<TrainerStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      {isTokenExist ? (
        <Fragment>
          <Stack.Screen
            name={'HomeScreen'}
            component={TrainerPanel}
          />
          <Stack.Screen name={'RegistrationScreen'} component={Registration} />
          <Stack.Screen
            name={'StatisticsScreen'}
            component={Statistics}
          />
        </Fragment>
      ) : (
        <Stack.Screen name={'AuthorizationScreen'} component={Authorization} />
      )}
    </Stack.Navigator>
  )}

export default TrainerRoutes