import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import React from 'react';
import {h, f, w} from '../theme/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const Login1 = () => {
  const [email, setEmail] = useState();
  const navigation = useNavigation();
  // const saveEmailPass = async () => {
  //   try {
  //     await AsyncStorage.setItem('EMAIL', 'email');
  //     navigation.navigate('Login2');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/image_processing20201027-29107-1f4mqzf.png')}
        style={styles.imageStyle}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.5)', 'white']}
          //start={{x: 0.1, y: 0.2}}
          //end={{x: 1, y: 100}}
          useAngle={true}
          angle={158}
          angleCenter={{x: 3.4, y: -1.4}}
          style={styles.gradient}>
          <Image
            source={require('../../assets/k-without-bg.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.textStyle}>{`Welcome To Kinterest`}</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder=" Email address"
            keyboardType={'default'}
            value={email}
            onChangeText={txt => setEmail(txt)}></TextInput>
          <Pressable
            style={styles.inputbutton}
            onPress={() => {
              navigation.navigate('Login2');
            }}>
            <Text style={styles.textStyle2}>Continue</Text>
          </Pressable>
          <Pressable
            style={styles.inputbutton1}
            onPress={() => {
              navigation.navigate('Login2');
            }}>
            <Text style={styles.textStyle2}>Continue with Facebook</Text>
          </Pressable>
          <Pressable
            style={[styles.inputbutton2]}
            onPress={() => {
              navigation.navigate('Login2');
            }}>
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
          <Text
            style={{fontWeight: '500', fontSize: f(1.3), flexDirection: 'row'}}>
            Are you a business?
            <Text style={{color: 'black'}}> Get Started here</Text>
          </Text>

          <Text style={styles.textStyle3}>
            By continuing,you agree to Pinterest's Terms of Service and
            acknowledge that you've read our Privacy Policy.Notice at
            collection.
          </Text>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 3,
  },
  gradient: {
    height: 435,
    width: '100%',
    marginTop: 300,
    alignItems: 'center',
  },
  inputStyle: {
    height: h(5.9),
    width: '90%',
    borderWidth: 1,

    borderRadius: 20,
    fontWeight: '600',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    tintColor: 'red',
  },
  iconStyle: {
    height: h(14),
    width: w(24),
    // alignItems: 'center',
    //justifyContent: 'center',
    top: -37,
  },
  textStyle: {
    fontWeight: '500',
    fontSize: f(2.1),
    color: 'black',
  },
  textStyle2: {
    fontWeight: '500',
    fontSize: f(1.4),
    paddingTop: 10,
    color: 'white',
  },
  textStyle3: {
    fontWeight: '500',
    fontSize: f(1),
  },

  inputbutton: {
    height: h(5.5),
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    marginTop: 6,
    marginBottom: 8,
  },
  inputbutton1: {
    height: h(5.5),
    width: '90%',
    // alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputbutton2: {
    height: h(5.5),
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    marginTop: 8,
  },
  //padding for icon in a pressable
  // subIcon: {
  // height: h(2.8),
  //  width: w(5.5),
  // },
});
export default Login1;
