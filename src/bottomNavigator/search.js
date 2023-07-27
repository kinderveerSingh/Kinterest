import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {h, f, w} from '../theme/responsive';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const navigation = useNavigation;
const Search = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
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

        <Pressable style={styles.inputbutton}>
          <Text style={styles.textStyle2}>Next</Text>
        </Pressable>
      </View>
      <View style={styles.seperator}></View>

      <Pressable style={styles.addPic}>
        <Image
          style={styles.profileImage}
          resizeMode="cover"
          source={
            // image?.uri
            // ? {uri: image.uri} :
            require('../../assets/image_processing20201027-29107-1f4mqzf.png')
          }
        />
      </Pressable>
      <View style={styles.seperator}></View>
      <Text style={styles.title}>Add the Title</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Write a title "
        keyboardType={'default'}
        //value={email}
        //</View>  onChangeText={txt => setEmail(txt)}
      ></TextInput>
      <View style={styles.seperator}></View>
      <Text style={styles.title}>Add the Details</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Write a description for your Pin here"
        keyboardType={'default'}></TextInput>
      <View style={styles.seperator}></View>
    </ScrollView>
  );
};

export default Search;

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
