import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

//@ Screens
import { Details } from '../screens/Details';
import { Home } from '../screens/Home';
import { Movie } from '../interfaces/movie';

export type RootStackParamList = {
  Home: undefined;
  Details: { movie: Movie };
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'white',
  },
};

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
