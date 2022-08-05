import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SigninScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SigninScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}></Stack.Screen>

        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;