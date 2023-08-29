import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {h, f, w} from '../theme/responsive';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

function Notification(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const createNewUser = async (email, password) => {
    await auth()
      .createUserWithEmailAndPassword(email, password)

      .then(result => {
        // Alert('new user login successfully');
        console.log('User account created & signed in!', result);
        const {user} = result || {};
        const {_user} = user || {};
        const {uid} = _user;
        console.log('uid', uid);

        let obj = {
          name,
          email,
          uid,
          userLogin: 'true',
        };
      });
    AsyncStorage.setItem('userDetail', JSON.stringify(obj)).catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
  };
  const uploadPin = firestore().collection('loginUser').add(userDetail);
  if (uploadPin) {
    Alert.alert('image upload successfully');
    navigation.navigate('Home1');
    console.log(obj);
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <Pressable
        // onPress={() => {
        //   navigation.goBack();
        // }}
        >
          <Image
            source={require('../../assets/icons8-back-30.png')}
            style={styles.iconStyle}
          />
        </Pressable>
        <Text style={{fontWeight: '600', fontSize: f(1.4), color: 'black'}}>
          Sign Up
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            keyboardType={'default'}
            value={name}
            onChangeText={txt => setName(txt)}></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Email address"
            keyboardType={'default'}
            value={email}
            onChangeText={txt => setEmail(txt)}></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            keyboardType={'default'}
            secureTextEntry={false}
            value={password}
            onChangeText={txt => setPassword(txt)}></TextInput>
        </View>
        <Pressable
          style={styles.inputbutton}
          onPress={() => {
            // if (!email) {
            //   Alert.alert('Please enter email');
            // } else if (!password) {
            //   Alert.alert('Please enter password');
            // } else {
            // uploadPin();
            // }
          }}>
          <Text style={styles.textStyle}>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
  },
  header: {
    height: h(7),
    width: '100%',
    //backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 175,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  iconStyle: {
    height: 32,
    width: 30,
  },

  inputView: {
    height: h(6.1),
    width: '83%',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e3e3e3',
  },
  inputStyle: {
    width: '84%',
    fontWeight: '600',
  },
  textStyle: {
    fontWeight: '500',
    fontSize: f(1.4),
    paddingTop: 7,
    color: 'white',
    alignItems: 'center',
  },
  inputbutton: {
    height: h(5.5),
    width: '83%',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    marginTop: 6,
    marginBottom: 8,
    alignItems: 'center',
  },
});

// export default Notification;

// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

// const Notification = () => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleModal} style={styles.openButton}>
//         <Text style={styles.openButtonText}>Toggle Bottom Sheet Modal</Text>
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={toggleModal}>
//         <View style={styles.modalContainer}>
//           <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
//             <Text style={styles.closeButtonText}>Close Modal</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   openButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   openButtonText: {
//     color: 'white',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   closeButton: {
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//   },
//   closeButtonText: {
//     color: 'blue',
//   },
// });

export default Notification;
