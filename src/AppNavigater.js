import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext} from '../App';
import Login1 from './authScreen/login1';
import Login2 from './authScreen/login2';
import Interest from './authScreen/interest';
import BottomNavigator from './bottomNavigator/BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login1'}>
      <Stack.Screen name="Login1" component={Login1} />
      <Stack.Screen name={'Login2'} component={Login2} />
    </Stack.Navigator>
  );
}
// function InterestNavigator() {
//   return (
//     <Stack.Navigator initialRouteName={'Interest'}>
//       <Stack.Screen name={'Interest'} component={Interest} />
//     </Stack.Navigator>
//   );
// }
const AppNavigater = () => {
  const [userLogin, getUserLogin] = useState('');
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userDetails = await AsyncStorage.getItem('userDetail');
    console.log('userDetails', userDetails);
    let {userLogin} = (userDetails && JSON.parse(userDetails)) || {};
    if (userLogin === 'true') {
      getUserLogin('true');
    } else {
      getUserLogin('false');
    }
  };

  const renderStack = () => {
    if (userLogin === 'true') {
      return <BottomNavigator />;
    } else if (userLogin === 'false') {
      return <AuthNavigator />;
    }
  };

  return <NavigationContainer>{renderStack()}</NavigationContainer>;
};

export default AppNavigater;
