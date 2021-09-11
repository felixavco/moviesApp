import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { screens } from '../config';

//@ Screens
import { Details } from '../screens/Details';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'white',
  },
};

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={screens.HOME} component={Home} />
      <Stack.Screen name={screens.DETAILS} component={Details} />
    </Stack.Navigator>
  );
}
