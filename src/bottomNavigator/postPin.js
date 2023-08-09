import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {h, f, w} from '../theme/responsive';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import storage from '@react-native-firebase/storage';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const PostPin = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
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
  const uploadImage = async () => {
    const reference = storage()
      .ref(`Categories`)
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

        const pinData = {
          Title: title,
          Description: description,
          image: result,
        };
        const uploadPin = firestore().collection('Images').add(pinData);
        if (uploadPin) {
          Alert.alert('image upload successfully');
          navigation.navigate('Home1');
        }
        console.log('uploadPin', uploadPin);
      })
      .catch(error => {});
  };

  const pinDetail = () => {
    console.log('Calllll');

    // reference
    //   .add(pinData)
    //   .then(data => {
    //     console.log('result of set profile on firebase...', data);
    //   })
    //   .catch(error => {
    //     console.log('error of set product on firebase...', error);
    //   });
  };
  /////////////////////////
  //////
  // const uploadImage = async () => {
  //   const reference = ref(storage, Categories(image.assets[0].uri));
  //   console
  //   const pathTofile = uploadBytesResumable(reference);
  //   const downloadURL = await reference.getDownloadURL();
  // };
  //async
  //   const storage = getStorage();
  //   useEffect(()=> {
  //     const uploadImage= async() =>{

  //     }
  //     if (image = null)
  //     {
  //       uploadImage();
  //       setImage(null);
  //     }
  //   });
  // const blobImage = await new Promise((resolve,reject) => {

  // })
  //   // Create the file metadata
  //   /** @type {any} */
  //   const metadata = {
  //     contentType: 'image/jpeg',
  //   };
  //   const storageRef = ref(storage, 'Categories/' + Date.now());
  //   const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

  //   uploadTask.on(
  //     'state_changed',
  //     snapshot => {
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log('Upload is ' + progress + '% done');
  //       switch (snapshot.state) {
  //         case 'paused':
  //           console.log('Upload is paused');
  //           break;
  //         case 'running':
  //           console.log('Upload is running');
  //           break;
  //       }
  //     },
  //     error => {
  //       switch (error.code) {
  //         case 'storage/unauthorized':
  //           break;
  //         case 'storage/canceled':
  //           break;

  //         // ...

  //         case 'storage/unknown':
  //           // Unknown error occurred, inspect error.serverResponse
  //           break;
  //       }
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
  //         console.log('File available at', downloadURL);
  //       });
  //     },
  //   );
  //};
  //   const reference = storage().ref('Categories');
  //   child(uid).child(image.setImage);
  //   reference
  //     .putFile(image.uri)
  //     .then(result => {
  //       downloadImageUrl(reference);
  //       console.log('result', result);
  //     })
  //     .catch(error => {
  //       console.log('Error', error);
  //     });
  // };

  // const downloadImageUrl = reference => {
  //   reference.getDownloadURL().then(result => {
  //     Categories(result);
  //     console.log('result of download image ', result);
  //   });
  // };

  // const Categories = CategoriesImage => {
  //   console.log('helloo');
  //   const reference = firestore().collection('Images');
  //   const pinLoad = {
  //     title: title,
  //     description: description,
  //     image: CategoriesImage,
  //   };
  //   reference.add(pinLoad).then(data => {
  //     console.log('result of set product on firestore...', data);
  //   });
  //vehical boookikng
  console.log('first', image);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../assets/icons8-back-30.png')}
            style={styles.iconStyle}
          />
        </Pressable>
        <Text style={{fontWeight: '700', fontSize: f(1.3), color: 'black'}}>
          Create Pin
        </Text>

        <Pressable
          style={styles.inputbutton}
          onPress={() => {
            uploadImage();
          }}>
          <Text style={styles.textStyle2}>Next</Text>
        </Pressable>
      </View>
      <View style={styles.seperator}></View>

      <Pressable
        style={styles.addPic}
        onPress={() => {
          pickImage();
        }}>
        <Image
          source={
            image !== null
              ? {uri: image.assets[0].uri}
              : require('../../assets/Lovepik_com-401483374-man-uploading-photos-on-mobile-phone(1).png')
          }
          style={{width: w(55), height: h(42), borderRadius: w(8)}}
        />
      </Pressable>
      <View style={styles.seperator}></View>
      <Text style={styles.title}>Add the Title</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Write a title "
        keyboardType={'default'}
        value={title}
        onChangeText={txt => setTitle(txt)}></TextInput>
      <View style={styles.seperator}></View>
      <Text style={styles.title}>Add the Details</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Write a description for your Pin here"
        keyboardType={'default'}
        value={description}
        onChangeText={txt => setDescription(txt)}></TextInput>
      <View style={styles.seperator}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: h(7),
    width: '100%',
    //backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 1,
    //borderBottomWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 5,
  },
  iconStyle: {
    height: 32,
    width: 30,
  },

  inputStyle: {
    fontSize: f(1.3),
    fontWeight: '700',
    height: h(9.7),
    width: '100%',

    //marginTop: 10,
    // marginBottom: 10,
    // backgroundColor: '#e3e3e3',
  },

  textStyle2: {
    fontWeight: '500',
    fontSize: f(1.4),
    paddingTop: 10,
    color: 'white',
    alignItems: 'center',
  },

  inputbutton: {
    height: h(5.1),
    width: w(20),
    backgroundColor: 'blue',
    borderRadius: 16,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  addPic: {
    height: 350,
    width: 380,
    //backgroundColor: 'grey',
    //flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: w(55),
    height: h(42),
    borderRadius: w(8),
  },
  seperator: {
    height: 1.5,
    borderBottomWidth: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    fontSize: f(1.26),
    //backgroundColor: 'red',
    fontWeight: '700',
    paddingHorizontal: 5,
    paddingTop: 3,
    color: '#3d3a3a',
  },
});
export default PostPin;
