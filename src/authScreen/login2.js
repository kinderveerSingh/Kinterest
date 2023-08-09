import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {h, f, w} from '../theme/responsive';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

function Login2(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  // const login = () => {
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       alert('user login successfully');
  //       navigation.navigate('interest');
  //     })
  //     .catch(error => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(errorMessage);
  //       console.log(error);
  //     });
  // };

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
          email,
          uid,
          userLogin: 'true',
        };

        AsyncStorage.setItem('userDetail', JSON.stringify(obj));
        //      await
        // .firestore()
        // .collection('loginUser')
        // .doc(response.user.uid)
        // .set(LoginDetail);
        //for

        // const {email} = result.user;
        // const userDetail = {
        //   email,
        // };
        // const userDetailJson = JSON.stringify(userDetail);
        // AsyncStorage.setItem('userDetail', userDetailJson);
        // AsyncStorage.setItem('userLogin', 'true');
        // setUserLogin('true');
        // setUserDetails(userDetail);
        //console.log('User account created & signed in!', result.user);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const createUser = async () => {
    console.log('createUser');
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Alert('user login successfully');
        console.log('userCredential', userCredential);
        const {user} = userCredential || {};
        const {_user} = user || {};
        const {uid} = _user;
        console.log('uid', uid);

        let obj = {
          email,
          uid,
          userLogin: 'true',
        };

        AsyncStorage.setItem('userDetail', JSON.stringify(obj));
      })
      .catch(error => {
        console.log('error', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode', errorCode, 'errorMessage', errorMessage);
        if (errorCode === 'auth/user-not-found') {
          createNewUser(email, password);
        }
      });
    // const response = await auth()
    //   .createUserWithEmailAndPassword(email, password)

    //   .then(() => {
    //     console.log('User account created & signed in!');

    //     //      await
    //     // .firestore()
    //     // .collection('loginUser')
    //     // .doc(response.user.uid)
    //     // .set(LoginDetail);
    //     //for

    //     // const {email} = result.user;
    //     // const userDetail = {
    //     //   email,
    //     // };
    //     // const userDetailJson = JSON.stringify(userDetail);
    //     // AsyncStorage.setItem('userDetail', userDetailJson);
    //     // AsyncStorage.setItem('userLogin', 'true');
    //     // setUserLogin('true');
    //     // setUserDetails(userDetail);
    //     console.log('User account created & signed in!', result.user);
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });
  };
  // const saveEmailPass = async () => {
  //   try {
  //     const userCreated = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     navigation.navigate('Login1');
  //     console.log(userCreated);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  //   try {
  //     await AsyncStorage.getItem('EMAIL', 'email');
  //     await AsyncStorage.setItem('PASSWORD', 'password');
  //     navigation.navigate('Login1');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              navigation.navigate('Login1');
            }}>
            <Image
              source={require('../../assets/icons8-back-30.png')}
              style={styles.iconStyle}
            />
          </Pressable>
          <Text style={{fontWeight: '600', fontSize: f(1.4), color: 'black'}}>
            Log in
          </Text>
        </View>

        <Pressable style={styles.inputbutton1}>
          <Text style={styles.textStyle2}>Continue with Facebook</Text>
        </Pressable>
        <Pressable style={[styles.inputbutton2]}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: f(1.4),
              color: 'black',
              paddingTop: 10,
            }}>
            Continue with Phone
          </Text>
        </Pressable>
        <Text style={styles.simpleText}>or </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder=" Email address"
          keyboardType={'default'}
          value={email}
          onChangeText={txt => setEmail(txt)}>
          {/* // value={this.state.email}
          // onChangeText={email => this.setstate(email)}> */}
        </TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder=" Password"
          keyboardType={'default'}
          secureTextEntry={false}
          value={password}
          onChangeText={txt => setPassword(txt)}>
          {/* // value={this.state.password}
          // onChangeText={password => setPassword(password)}> */}
        </TextInput>
        <Pressable
          style={styles.inputbutton}
          onPress={() => {
            if (!email) {
              Alert.alert('Please enter email');
            } else if (!password) {
              Alert.alert('Please enter password');
            } else {
              createUser();
            }
          }}>
          <Text style={styles.textStyle3}>Continue</Text>
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
    height: '100%',
    width: '100%',
    paddingHorizontal: 3,
    alignItems: 'center',
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
  simpleText: {
    fontWeight: '600',
    fontSize: f(1.4),
    color: 'black',
    alignItems: 'center',

    marginTop: 20,
    marginBottom: 20,
  },

  inputStyle: {
    height: h(5.9),
    width: '83%',
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: '600',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
  },

  textStyle2: {
    fontWeight: '500',
    fontSize: f(1.4),
    //paddingTop: 10,
    color: 'white',
    alignItems: 'center',
  },
  textStyle3: {
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
  inputbutton1: {
    height: h(5.5),
    width: '83%',
    // alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputbutton2: {
    height: h(5.5),
    width: '83%',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    marginTop: 8,
  },
});

export default Login2;
