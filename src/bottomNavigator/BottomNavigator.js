import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Login1 from './login1';
import Login2 from './login2';
import Home1 from './home1';
import Home2 from '../authScreen/home2';
import Search from './search';
import Add from './add';
import Notification from './notification';
import Profile from './profile';
import Profile2 from './profile2';

import {h, f, w} from '../theme/responsive';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={() => <TabBar />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Login1" component={Login1} />
      <Tab.Screen name="Login2" component={Login2} />
      <Tab.Screen name="Home1" component={Home1} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Profile2" component={Profile2} />
    </Tab.Navigator>
  );
};

function TabBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate('Login1');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/home(1).png')}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Login2');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/home(1).png')}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Home1');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/home(1).png')}
        />
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('Search');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/loupe.png')}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Add', {id: 1});
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/add.png')}
        />
        <Text style={styles.iconText}>Add</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Notification');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/chat.png')}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/user(1).png')}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Profile2');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/user(1).png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: h(6.7),
    width: '90%',
    marginLeft: 19,

    //backgroundColor: 'green',
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: 'red',
  },
  tabButtons: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    height: h(3.1),
    width: w(6),
  },
  iconText: {
    fontsize: 10,
    fontWeight: '700',
    fontStyle: 'normal',
    includeFontPadding: true,
  },
});
export default BottomNavigator;
