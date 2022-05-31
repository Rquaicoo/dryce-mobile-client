import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Mainstack from './navigations/Mainstack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from './Screens/Startup';
import Login from './Screens/Login';
import Register from './Screens/Register';
import OTP from './Screens/OTP';




const Stack = createNativeStackNavigator();
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
// import { createStackNavigator } from 'react-navigation-stack'
// import { useScreens as enableScreens } from 'react-native-screens'

// enableScreens()

// import Origin from './Origin'
// import Destination from './Destination'

// const navigator = createSharedElementStackNavigator(
//   createStackNavigator, 
//   {
//     Origin, Destination
//   }
// )



export default function App() {
  return (
    <NavigationContainer>
      <Mainstack />
    </NavigationContainer>

    // </Stack.Navigator>
    // </NavigationContainer>

  );
}
