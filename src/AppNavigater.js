import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './home';
import Cart from './cart';
// import login1 from './bottomNavigator/login1';
// import login2 from './bottomNavigator/login2';
import interest from './authScreen/interest';
import BottomNavigator from './bottomNavigator/BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'login1'}>
      {/* <Stack.Screen name={'login1'} component={login1} />
      <Stack.Screen name={'login2'} component={login2} /> */}
      <Stack.Screen name={'interest'} component={interest} />
    </Stack.Navigator>
  );
}

const AppNavigater = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default AppNavigater;
