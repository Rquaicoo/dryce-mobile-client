import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStack, OrdersStack, ProfileStack, HistoryStack } from './MainSTack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() { 

    return(
            <Tab.Navigator screenOptions={{
                headerShown: false,
            }}
            activeColor="#fff"
            barStyle={{ backgroundColor: 'tomato' }}
            >

                <Tab.Screen name="Home" component={HomeStack} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                  }} />
                  
                  <Tab.Screen name="Order" component={OrdersStack} 
                  options={{
                      tabBarLabel: 'Order',
                      tabBarIcon: ({ color }) => (
                          <MaterialIcons name="add" size={30} color={color} />
                      ),
                    }}
                    />

                <Tab.Screen name="Profile" component={ProfileStack} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={24} color={color} />
                    ),
                  }}/>

                
                <Tab.Screen name="History" component={HistoryStack} 
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
