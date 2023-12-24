import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginView from './screens/LoginView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import AnotherScreen from './screens/AnotherScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginView}
        />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Another"
          component={AnotherScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
