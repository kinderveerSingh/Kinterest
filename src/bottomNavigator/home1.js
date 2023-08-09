import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Button,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {h, f, w} from '../theme/responsive';
import MasonryList from '@react-native-seoul/masonry-list';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const grid = [
  {
    id: 'id123',
    title: 'Pioneer LHS ',
    description: 'Diamond Ring In 18Kt Yellow Gold ',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkWH-w6MFrwKAQHvelDhXUwFH4ysSB61_BA&usqp=CAU',
  },
  {
    id: 'id124',
    title: 'Precedant Furniture',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
  },
  {
    id: 'id125',
    title: 'Leverette ',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
  },
  {
    id: 'id126',
    title: 'Briget Accent Table',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
  },
  {
    id: 'id127',
    title: 'Rivet Emerly ',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id128',
    title: 'Home Accent Chair',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id129',
    title: 'Ecobirdy Chair',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id130',
    title: 'Hailey Sofa',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
  },
  {
    id: 'id131',
    title: 'Dining Table',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
  },
  {
    id: 'id132',
    title: 'Evelyn Coffee Table',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id133',
    title: 'Slope Sofa',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id134',
    title: 'Chair & Table',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
  },
  {
    id: 'id223',
    title: ' Chaise Lounger Grey',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
  },
  {
    id: 'id224',
    title: 'Precedant Furniture',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
  },
  {
    id: 'id225',
    title: 'Platform Bed',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
  },
  {
    id: 'id226',
    title: 'Briget Accent Table',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
  },
  {
    id: 'id227',
    title: 'Rivet Emerly',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id228',
    title: 'Flower Accent Chair',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id229',
    title: 'Charlie Chair',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id230',
    title: 'Hailey Sofa',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
  },
  {
    id: 'id231',
    title: 'Slope Nomad Leather Sofa',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
  },
  {
    id: 'id232',
    title: 'Evelyn Coffee Table',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id233',
    title: 'Slope Nomad Leather Sofa',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id234',
    title: 'Chair and Table',
    description: 'pearlsand gold with Diamond',
    imgURL:
      'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
  },
];
const renderItem = props => {
  console.log(props);
  const navigation = useNavigation();
  const {item, i} = props;
  const {Description, Title, image} = item || {};
  const randomBool = Math.random() < 0.5;
  console.log(randomBool);
  return (
    <View
      key={item.id}
      style={[{marginTop: 12, flex: 1}, {marginLeft: i % 2 === 0 ? 0 : 12}]}>
      <Pressable
        onPress={() => {
          navigation.navigate('PinView', {item: item});
        }}>
        <Image
          source={{uri: image}}
          style={{
            height: randomBool ? 150 : 280,
            alignSelf: 'stretch',
            borderRadius: 20,
          }}
          resizeMode="cover"
        />
      </Pressable>
      <Text style={styles.name}>{Title}</Text>
      <Text numberOfLines={2} style={styles.description}>
        {Description}
      </Text>
    </View>
  );
};

const Homefeed = () => {
  const [firebaseData, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData();
    });
  }, []);

  const fetchData = async () => {
    try {
      const snapshot = await firestore().collection('Images').get();
      const items = snapshot.docs.map(doc => doc.data());
      // return data.data();
      setData(items);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <MasonryList
        keyExtractor={item => item.id}
        ListHeaderComponent={<View />}
        contentContainerStyle={{
          paddingHorizontal: 15,
          // backgroundColor: 'pink',
          alignSelf: 'stretch',
        }}
        onEndReached={() => console.log('onEndReached')}
        numColumns={2}
        data={firebaseData}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  grid: {
    paddingHorizontal: 8,
    //backgroundColor: 'green',
  },
  imageView: {
    width: w(40),
    height: h(28),
    marginTop: 8,
  },
  image: {
    width: w(40),
    height: h(28),
    borderRadius: 20,
    // marginTop: 15,
  },
  details: {
    marginLeft: 10,
  },
  name: {
    fontSize: f(1.1),
    marginTop: 8,
    color: '#000000',
  },
  description: {
    fontSize: f(0.9),
    color: 'black',
    lineHeight: 17,
  },
});

export default Homefeed;
