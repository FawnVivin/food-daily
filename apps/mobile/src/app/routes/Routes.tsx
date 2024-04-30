import { useGetUser } from "@food-daily/mobile/api";
import { Role } from "@food-daily/shared/types"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authorization } from "@food-daily/mobile/features/authorization";

import TrainerRoutes from "./TrainerRoutes";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

import type { TrainerStackParamList } from "@food-daily/mobile/types";

const Routes = () => {
  const { data: user } = useGetUser()
  const Stack = createNativeStackNavigator<TrainerStackParamList>()

  switch (user?.role) {
    case Role.User:
      return <UserRoutes />
    case Role.Trainer:
      return <TrainerRoutes />
    case Role.Admin:
      return <AdminRoutes />
    default:
      return (
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
          <Stack.Screen
            name={'AuthorizationScreen'}
            component={Authorization}
          />
        </Stack.Navigator>
      )
  }
}

export default Routes