import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Home1 from './home1';
import Home2 from '../authScreen/home2';
import Search from './search';
import Add from './add';
import Notification from './notification';
import Profile from './profile';
import PinView from './pinView';
import PostPin from './postPin';
import AddProfile from './addProfile';
import {h, f, w} from '../theme/responsive';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={() => <TabBar />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home1" component={Home1} />
      <Tab.Screen name="PinView" component={PinView} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="PostPin" component={PostPin} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="AddProfile" component={AddProfile} />
    </Tab.Navigator>
  );
};

function TabBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate('Home1');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/home.png')}
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
          navigation.navigate('Add');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/plus.png')}
        />
        {/* <Text style={styles.iconText}>`Add`</Text> */}
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Notification');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/messenger.png')}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={styles.tabButtons}>
        <Image
          style={styles.iconButton}
          source={require('../../assets/user.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: h(5.7),
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
