import React, {useState, useContext} from 'react';
import {h, w, f} from '../theme/responsive';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {launchImageLibrary} from 'react-native-image-picker';

function AddProfile() {
  const navigation = useNavigation();
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      const response = await launchImageLibrary({
        mediaType: 'photo',
      });
      console.log(response);
      setImage(response);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (image != null) {
  //     uploadImage();
  //     setImage(null);
  //   }
  // }, [image]);

  /////////////////////
  const uploadUser = async () => {
    const reference = storage()
      .ref(`userProfile`)
      .child(image.assets[0].fileName);

    console.log(image.assets[0].fileName);
    reference

      .putFile(`${image.assets[0].uri}`)
      .then(result => {
        downloadImageUrl(reference);
        console.log('result', result);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  const downloadImageUrl = reference => {
    console.log(reference);
    reference

      .getDownloadURL()
      .then(result => {
        console.log('result of download image ', result);

        const userData = {
          Name: Name,
          Email: Email,
          image: result,
        };
        const firebaseUser = firestore()
          .collection('userProfile')
          .add(userData);
        if (userData) {
          Alert.alert('Profile update successfully');
          navigation.navigate('Profile');
        }
        console.log('userData', userData);
        console.log(firebaseUser);
      })
      .catch(error => {});
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={{fontWeight: '700', fontSize: f(1.3), color: 'black'}}>
          Create Pin
        </Text>
      </View>
      <View style={styles.seperator}></View>

      <Pressable
        style={styles.addPic}
        onPress={() => {
          pickImage();
        }}>
        <Image
          style={styles.profileImage}
          resizeMode="cover"
          source={
            image !== null
              ? {uri: image.assets[0].uri}
              : require('../../assets/Lovepik_com-401483374-man-uploading-photos-on-mobile-phone(1).png')
          }
        />
      </Pressable>
      <View style={styles.mainView}>
        <View style={styles.loginMobile}>
          <TextInput
            placeholder="Name"
            keyboardType={'default'}
            value={Name}
            onChangeText={txt => setName(txt)}
          />
        </View>
        <View style={styles.loginMobile}>
          <TextInput
            value={Email}
            placeholder="Email"
            keyboardType={'default'}
            onChangeText={txt => setEmail(txt)}
          />
        </View>
      </View>

      <Pressable
        style={styles.loginButton}
        onPress={() => {
          uploadUser();
        }}>
        <Text style={{color: 'white'}}>ADD PROFILE</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: w(3),
  },
  header: {
    height: h(7),
    width: '100%',
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    //borderBottomWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 5,
  },
  mainView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // backgroundColor: 'grey',
  },

  loginMobile: {
    width: '100%',
    height: h(7),

    // backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: h(3),
    flexDirection: 'row',
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  addPic: {
    height: 150,
    width: 380,
    //backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: w(20),
  },
  loginButton: {
    height: h(7),
    width: '100%',
    backgroundColor: `#4b92c9`,
    fontSize: 30,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  seperator: {
    height: 1.5,
    borderBottomWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default AddProfile;
