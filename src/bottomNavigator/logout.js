import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const Logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  return (
    <View>
      <Text>logout</Text>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
