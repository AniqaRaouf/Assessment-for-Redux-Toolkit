import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signupScreen';
import HomeScreen from '../screens/homeScreen';
const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup'>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Home Screen',
            headerStyle: {
              backgroundColor: '#82c2b8',
            },
            headerTintColor: '#11544a', // Set text color
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
