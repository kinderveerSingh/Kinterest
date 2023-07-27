import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {h, w, f} from '../theme/responsive';

const Profile2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.name}>Profile</Text> */}
        <Image
          source={require('../../assets/option.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.profile}>
        <Image
          source={require('../../assets/Trustnoone!.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Jaskaran Singh</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  header: {
    height: h(7),
    width: '100%',
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  icon: {
    height: 25,
    width: 25,
    // left: 70,
    //alignItems: 'center',
  },
  profile: {
    height: 260,
    width: '100%',
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 140,
    width: 140,
    backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 70,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    paddingTop: 15,
  },
});
export default Profile2;
