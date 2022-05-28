import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Mainstack, {ProfileStack, HistoryStack, HomeStack, OrdersStack} from './navigations/MainStack';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './navigations/MainSTack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}
