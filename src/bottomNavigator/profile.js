import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
import {h, w, f} from '../theme/responsive';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Profile = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  //const { Name,Email, image} = item || {};
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const snapshot = await firestore().collection('userProfile').get();
      const items = snapshot.docs.map(doc => doc.data());
      // return data.data();
      setData(items);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate('AddProfile');
          }}
          style={styles.subheader1}>
          <Image
            source={require('../../assets/add-friend.png')}
            style={styles.icon}
          />
        </Pressable>
        <View style={styles.subheader2}>
          <Text style={styles.profilename}>Profile</Text>
        </View>
        <View style={styles.subheader3}>
          <Image
            source={require('../../assets/arrow.png')}
            style={styles.icon}
          />
        </View>
      </View>

      <View style={styles.profile}>
        <Image
          source={require('../../assets/Trustnoone!.png')}
          style={styles.image}
        />
        <Text style={styles.name}>name</Text>
        <Text style={styles.email}>Email</Text>
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
    width: '99.8%',
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 5,
    // marginTop: 1.5,
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

  subheader1: {
    height: h(6.8),
    width: '33%',
    //backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  subheader2: {
    height: h(6.8),
    width: '33%',
    //backgroundColor: 'green',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  subheader3: {
    height: h(6.8),
    width: '33%',
    // backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  icon: {
    height: 30,
    width: 30,
    // left: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    height: 310,
    width: '100%',
    //backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    height: 140,
    width: 140,
    backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 70,
  },
  profilename: {
    fontSize: 18.5,
    fontWeight: '700',
    color: 'black',
    paddingTop: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    paddingTop: 15,
  },
  email: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
    paddingTop: 10,
  },
});
export default Profile;
