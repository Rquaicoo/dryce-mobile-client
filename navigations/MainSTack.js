import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from '../Screens/Startup';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const screenOptionstyle = {
    headerStyle : {
        backgroundColor : 'blue',
    }, 
    headerTintColor : 'white',
    headerBackTitle : 'Back'
}


const HomeStack = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionstyle}>
            <Stack.Screen  name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}

const ProfileStack = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionstyle} >
            <Stack.Screen  name="ProfileScren" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headershown: false}} >
        <Stack.Screen  name="Startup" component={Startup} options={{ headerShown: false }}/>
        <Stack.Screen  name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen  name="Register" component={Register} options={{ headerShown: false }} />  
        <Stack.Screen  name="TabNav" component={Tabs} />
    </Stack.Navigator>
  );
}

export { HomeStack, ProfileStack} ;
