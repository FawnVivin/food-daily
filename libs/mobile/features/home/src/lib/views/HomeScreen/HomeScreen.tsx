import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Statistics } from '@food-daily/mobile/features/statistics'
import { UserProducts } from '@food-daily/mobile/features/user-products'
import { Profile } from '@food-daily/mobile/features/profile'
import { useTheme } from 'react-native-paper'
import { useGetUser } from '@food-daily/mobile/api'
import { ScreenLoader } from '@food-daily/mobile/ui'

import { Home } from '../Home'

import type { TabParamList } from "@food-daily/mobile/types";


const Tab = createBottomTabNavigator<TabParamList>()

const HomeScreen = () => {
  const { colors } = useTheme()
  const {data: user, isSuccess, isPending} = useGetUser()

  if (!isSuccess || isPending) return <ScreenLoader/>
  const {visitor} = user

  if (!visitor) return null
  return (
    <Tab.Navigator
      initialRouteName='Home'
      backBehavior='initialRoute'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, borderTopWidth: 0, backgroundColor: colors.surface },
        headerShown: false
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon({ color, focused }) {
            if (focused) {
              return <MaterialCommunityIcons name='home' color={color} size={35} />
            }

            return <MaterialCommunityIcons name='home-outline' color={color} size={26} />
          }
        }}
      />
      <Tab.Screen
        name='StatisticsScreen'
        component={Statistics}
        initialParams={{visitorId: visitor.id}}
        options={{
          tabBarIcon({ color, focused }) {
            if (focused) {
              return <MaterialCommunityIcons name='chart-box' color={color} size={35} />
            }

            return <MaterialCommunityIcons name='chart-box-outline' color={color} size={26} />
          }
        }}
      />
      <Tab.Screen
        name='UserProducts'
        component={UserProducts}
        options={{
          tabBarIcon({ color, focused }) {
            if (focused) {
              return <MaterialCommunityIcons name='food-apple' color={color} size={35} />
            }

            return <MaterialCommunityIcons name='food-apple-outline' color={color} size={26} />
          }
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon({ color, focused }) {
            if (focused) {
              return <MaterialCommunityIcons name='account' color={color} size={35} />
            }

            return <MaterialCommunityIcons name='account-outline' color={color} size={26} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen
