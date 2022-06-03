import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
=======





>>>>>>> origin
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './navigations/MainStack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
