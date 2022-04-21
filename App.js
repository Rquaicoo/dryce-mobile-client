import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigations/MainSTack';

export default function App() {
  return (

    <NavigationContainer>
      <MainStack />
    </NavigationContainer>

  );
}
