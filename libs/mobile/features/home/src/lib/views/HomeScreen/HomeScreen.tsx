import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Statistics } from '@food-daily/mobile/features/statistics'
import { UserProducts } from '@food-daily/mobile/features/user-products'
import { Profile } from '@food-daily/mobile/features/profile'

import { Home } from '../Home'

const Tab = createBottomTabNavigator()
const HomeScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    backBehavior="order"
    screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{height:80, borderTopWidth: 0 },
      headerShown:false
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon({ color,focused }) {
          if (focused) {
            return <MaterialCommunityIcons name="home" color={color} size={35} />
          }

          return <MaterialCommunityIcons name="home-outline" color={color} size={26} />
        },
        headerShown:false
      }}
    />
    <Tab.Screen
      name="Statistics"
      component={Statistics}
      options={{
        tabBarIcon({ color, focused }) {
          if (focused){
            return<MaterialCommunityIcons name="chart-box" color={color} size={35} />}

          return <MaterialCommunityIcons name="chart-box-outline" color={color} size={26} />
        },
        headerTitleAlign:'center'
      }}
    />
    <Tab.Screen
      name="UserProducts"
      component={UserProducts}
      options={{
        tabBarIcon({ color, focused }) {
          if (focused){
            return <MaterialCommunityIcons name="food-apple" color={color} size={35} />}

          return <MaterialCommunityIcons name="food-apple-outline" color={color} size={26} />
        },
        headerTitleAlign:'center'
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon({ color, focused }) {
          if (focused){
            return <MaterialCommunityIcons name="account" color={color} size={35} />
          }

          return  <MaterialCommunityIcons name="account-outline" color={color} size={26} />
        },
        headerTitleAlign:'center'
      }}
    />
  </Tab.Navigator>
)

export default HomeScreen
