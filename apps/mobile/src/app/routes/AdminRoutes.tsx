import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authorization } from "@food-daily/mobile/features/authorization";
import { useToken } from "@food-daily/mobile/hooks";
import { AdminPanelScreen } from "@food-daily/mobile/features/admin-panel";

import type { AdminStackParamList } from "@food-daily/mobile/types";

const AdminRoutes = () => {
  const { isTokenExist } = useToken();
  const Stack = createNativeStackNavigator<AdminStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      {isTokenExist ? (
        <Stack.Screen
            name={'HomeScreen'}
            component={AdminPanelScreen}
          />
      ) : (
        <Stack.Screen name={'AuthorizationScreen'} component={Authorization} />
      )}
    </Stack.Navigator>
  )}

export default AdminRoutes