import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from './screenNames';

import SplashScreen from '../screens/splash';
import NoteScreen from '../screens/note';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.Splash}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
        <Stack.Screen name={ScreenNames.Note} component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
