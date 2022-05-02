import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './navigations/MainStack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from './Screens/Startup';
import Login from './Screens/Login';
import Register from './Screens/Register';
import OTP from './Screens/OTP';
import Home from './Screens/Home';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Startup" component={Startup}  options={{headerShown: false} }/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false} }/>
        <Stack.Screen name="Register" component={Register}  options={{headerShown: false} }/>
        <Stack.Screen name="OTP" component={OTP}  options={{headerShown: false} }/>
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false} }/>

    <NavigationContainer>
      <MainStack />
    </NavigationContainer>

  );
}
