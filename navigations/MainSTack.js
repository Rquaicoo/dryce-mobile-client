import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from '../Screens/Startup';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Orders from '../Screens/Orders';
import History from '../Screens/History';
import OTP from './Screens/OTP';
import Tabs from './Tabs';


const Stack = createNativeStackNavigator();

const screenOptionstyle = {
    headerShown: false,
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

const OrdersStack = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionstyle} >
            <Stack.Screen  name="Orders" component={Orders} />
        </Stack.Navigator>
    );
}

const HistoryStack = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionstyle} >
            <Stack.Screen  name="Historys" component={History} />
        </Stack.Navigator>
    );
}


export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
        }} >
            {/* Old Code */}
        {/* <Stack.Screen  name="Startup" component={Startup} options={{ headerShown: false }}/>
        <Stack.Screen  name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen  name="Register" component={Register} options={{ headerShown: false }} />  
        <Stack.Screen  name="TabNav" component={Tabs} /> */}

        <Stack.Screen name="Home" component={Startup}  options={{headerShown: false} }/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false} }/>
        <Stack.Screen name="Register" component={Register}  options={{headerShown: false} }/>
        <Stack.Screen name="OTP" component={OTP}  options={{headerShown: false} }/>

        
    </Stack.Navigator>
  );
}

export { HomeStack, ProfileStack, OrdersStack, HistoryStack} ;
