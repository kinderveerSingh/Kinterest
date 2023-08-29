import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Modal,
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
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };
  const navigation = useNavigation();
  return (
    // <View style={styles.container}>
    <View style={styles.headerContainer}>
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

      {/*  </View>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.textStyle}>Start Creating Now</Text>

            <View style={styles.description}>
              <Pressable style={styles.detail}>
                <Image
                  source={require('../../assets/checked.png')}
                  style={styles.iconImage}
                />
              </Pressable>

              <Pressable
                onPress={() => {
                  navigation.navigate('PostPin');
                }}
                style={styles.detail}>
                <Image
                  source={require('../../assets/pin.png')}
                  style={styles.iconImage}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('PostPin');
                }}
                style={styles.detail}>
                <Image
                  source={require('../../assets/menu.png')}
                  style={styles.iconImage}
                />
              </Pressable>
            </View>
            <View style={styles.detail1}>
              <Text style={styles.textStyle1}>Idea Pin</Text>
              <Text style={styles.textStyle1}>Pin</Text>
              <Text style={styles.textStyle1}>Board</Text>
            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
}

// <TouchableOpacity  style={styles.openButton}>
//   <Text style={styles.openButtonText}>Open Bottom Sheet Modal</Text>
// </TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: h(5.7),
    width: '94%',
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

  openButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  openButtonText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: 270,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: f(1.46),
    fontWeight: '600',
    fontStyle: 'normal',
    color: 'black',
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
  },
  description: {
    height: h(12),
    width: '100%',
    //backgroundColor: 'green',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  detail: {
    height: h(9),
    width: w(16.8),
    //backgroundColor: 'green',
    borderWidth: 1.5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  detail1: {
    height: h(4),
    width: '100%',
    //backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconImage: {
    height: h(2.7),
    width: w(5),
  },
  button: {
    height: h(6),
    width: w(19),
    backgroundColor: '#d91438',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle1: {
    fontSize: f(1.35),
    fontWeight: '600',
    fontStyle: 'normal',
    color: 'black',
  },
});
export default BottomNavigator;
