import React from 'react';
import {h, w, f} from '../theme/responsive';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const PinView = props => {
  const navigation = useNavigation();
  console.log(props);
  const {item} = props?.route?.params || {};
  const {Title, Description, image} = item || {};
  console.log('item', item);
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.imageView}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backbtn}>
            <Image
              source={require('../../assets/left-chevron.png')}
              style={styles.iconImage}
            />
          </Pressable>
          <Image source={{uri: image}} style={styles.cardImage} />
        </View>
        <View style={styles.description}>
          <View style={styles.detail1}>
            <Text style={styles.mainTitle}>{Title} </Text>
            <Text style={styles.titledescription}>{Description}</Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.subDetail}>
              <Image
                source={require('../../assets/image_processing20201027-29107-1f4mqzf.png')}
                style={styles.profileImage}
              />
              <Text style={styles.username}>username</Text>
            </View>
            <Pressable style={[styles.button, styles.addColor]}>
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>

          {/* <View style={styles.detail2}>
            <Pressable style={[styles.button, styles.addColor]}>
              <Text style={styles.textStyle}>View</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //paddingHorizontal: w(1),
    backgroundColor: 'black',
    //backgroundColor: '#232324',
  },
  imageView: {
    height: h(87),
    width: '100%',
  },
  cardImage: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'pink',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 20,
  },

  description: {
    height: h(25),
    width: '100%',
    //borderWidth: 1,
    backgroundColor: 'white',
    //backgroundColor: '#232324',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // paddingTop: 10,
    justifyContent: 'space-between',
    // marginTop: 28,
  },
  detail: {
    height: h(8),
    width: '100%',
    //backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subDetail: {
    //backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail1: {
    height: h(10),
    width: '100%',
    //backgroundColor: 'pink',
  },
  detail2: {
    height: h(6.2),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingBottom: 8,
    // backgroundColor: 'blue',
  },
  iconImage: {
    height: h(3),
    width: w(6),
  },
  backbtn: {
    position: 'absolute',
    zIndex: 5,
    top: 23,
    left: 13,
    // height: 40,
    // width: 40,
    // borderRadius: 20,
    // backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profileImage: {
    height: h(6),
    width: w(12),
    borderRadius: 25,
  },

  button: {
    height: h(6),
    width: w(19),
    backgroundColor: '#232324',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addColor: {
    backgroundColor: '#9da19a',
  },
  textStyle: {
    fontSize: f(1.2),
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'white',
  },
  mainTitle: {
    fontSize: f(1.6),
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
    margin: 10,
    lineHeight: 30,
    letterSpacing: 1.5,
  },
  titledescription: {
    fontSize: f(1.1),
    fontWeight: '600',
    fontStyle: 'normal',
    /// textAlign: 'center',
    color: 'black',
    paddingHorizontal: 12,
    lineHeight: 17,
    letterSpacing: 0.5,
  },
  username: {
    fontSize: f(1.2),
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'black',
    paddingLeft: 7,
  },
});

export default PinView;
