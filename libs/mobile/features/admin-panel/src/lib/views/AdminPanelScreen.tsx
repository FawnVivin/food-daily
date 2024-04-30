import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'react-native-paper'
import { AdminVisitorsList } from '@food-daily/mobile/features/admin-visitors-list'
import { AdminTrainersList } from '@food-daily/mobile/features/admin-trainers-list'
import { AdminProductsList } from '@food-daily/mobile/features/admin-products-list'

import type { AdminTabParamList } from '@food-daily/mobile/types'



const AdminPanelScreen = () => {
  const { colors } = useTheme()  
  const Tab = createBottomTabNavigator<AdminTabParamList>()

  return (
    <Tab.Navigator
      initialRouteName='VisitorsScreen'
      backBehavior='initialRoute'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, borderTopWidth: 0, backgroundColor: colors.surface },
        headerShown: false
      }}
    >
      <Tab.Screen
        name='VisitorsScreen'
        component={AdminVisitorsList}
        options={{
          tabBarIcon({ color, focused }) {
            if (focused) {
              return <MaterialCommunityIcons name='account-group' color={color} size={35} />
            }

            return <MaterialCommunityIcons name='account-group-outline' color={color} size={26} />
          }
        }}
      />
      <Tab.Screen
        name='TrainersScreen'
        component={AdminTrainersList}
        options={{
          tabBarIcon({ color, focused }) {
            if (focused) {
              return <MaterialCommunityIcons name='account-cowboy-hat' color={color} size={35} />
            }

            return <MaterialCommunityIcons name='account-cowboy-hat-outline' color={color} size={26} />
          }
        }}
      />
      <Tab.Screen
        name='ProductsScreen'
        component={AdminProductsList}
        options={{
          tabBarIcon({ color, focused }) {
            if (focused) {
              return <MaterialCommunityIcons name='food-apple' color={color} size={35} />
            }

            return <MaterialCommunityIcons name='food-apple-outline' color={color} size={26} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default AdminPanelScreen