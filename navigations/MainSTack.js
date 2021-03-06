import * as React from 'react';
import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from '../Screens/Startup';
import Login from '../Screens/Login';
import Register from '../Screens/Register';


import Orders from '../Screens/Orders';
import History from '../Screens/History';
import OTP from '../Screens/OTP';

import Tabs from './Tabs';
import Home from '../Screens/Home';

import Checkout from '../Screens/Checkout';

import Details from '../Screens/Details';
import Cart from '../Screens/Cart';
import Profile from '../Screens/Profile';
import Vendors from '../Screens/Vendors';




const Stack = createNativeStackNavigator();

const screenOptionstyle = {
    headerShown: false,
}


const HomeStack = () => {
    return(


        <View style={{flex: 1}} collapsable={false} >
            <Stack.Navigator screenOptions={screenOptionstyle}>
                <Stack.Screen  name="HomeScreen" component={Home} />
               
            </Stack.Navigator>
        </View>


    );
}

const ProfileStack = () => {
    return(
        <View style={{flex: 1}} collapsable={false} >
            <Stack.Navigator screenOptions={screenOptionstyle} >
                <Stack.Screen  name="ProfileScreen" component={Profile} />
            </Stack.Navigator>
        </View>
    );
}

const OrdersStack = () => {
    return(

        <View style={{flex: 1}} collapsable={false} >
            <Stack.Navigator screenOptions={screenOptionstyle} >
                <Stack.Screen  name="Orders" component={Orders} />
            </Stack.Navigator>
        </View>

    );
}

const HistoryStack = () => {
    return(


        <View style={{flex: 1}} collapsable={false} >
            <Stack.Navigator screenOptions={screenOptionstyle} >
                <Stack.Screen  name="History" component={History} />
            </Stack.Navigator>
        </View>

    );
}


export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
        }} > 
        {<Stack.Screen name="Startup" component={Startup}  options={{headerShown: false}}/>}
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false} }/>
        <Stack.Screen name="Register" component={Register}  options={{headerShown: false} }/>
        <Stack.Screen name="OTP" component={OTP}  options={{headerShown: false} }/>
        <Stack.Screen name="Tabs" component={Tabs}  options={{headerShown: false} }/>

        <Stack.Screen  name="History" component={History} options={{headerShown: false}} />
        <Stack.Screen  name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen  name="Vendors" component={Vendors} options={{headerShown: false}} />
        
        
        <Stack.Screen  name="Checkout" component={Checkout} options={{headerShown: false}}/>
        <Stack.Screen  name="Cart" component={Cart} options={{headerShown: false}} />
        
        <Stack.Screen  name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export { HomeStack, ProfileStack, OrdersStack, HistoryStack};
