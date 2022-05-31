import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Mainstack from './navigations/MainSTack';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './navigations/MainStack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}
