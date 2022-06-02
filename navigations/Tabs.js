import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { HomeStack, OrdersStack, ProfileStack, HistoryStack } from './MainStack';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Cart from '../Screens/Cart';
import History from '../Screens/History';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign, Ionicons } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

export default function Tabs() { 

    return(
            <Tab.Navigator screenOptions={{
                headerShown: false,
            }}
            activeColor="#0090ff"
            barStyle={{ backgroundColor: '#ffffff',
            showLabel: false,
            position: "absolute",
            bottom: "3%",
            left: "14%",
            right: "14%",
            elevation: 0,
            borderRadius: 10,
            overflow: "hidden",
          height: "7%",}}
            >

                <Tab.Screen name="HomeTab" component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                  }} />
                  
                  <Tab.Screen name="Cart" component={Cart} 
                  options={{
                      tabBarLabel: 'Cart',
                      tabBarIcon: ({ color }) => (
                          <AntDesign name="shoppingcart" size={24} color={color} />
                      ),
                    }}
                    />

                <Tab.Screen name="Profile" component={Profile} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={24} color={color} />
                    ),
                  }}/>

                
                <Tab.Screen name="History" component={History} 
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="history" color={color} size={26} />
                    ),
                  }}
                  />
            </Tab.Navigator>
    );
}
