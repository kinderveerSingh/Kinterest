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
import React, {useEffect, useMemo} from 'react';
import {h, f, w} from '../theme/responsive';
import MasonryList from '@react-native-seoul/masonry-list';
const grid = [
  {
    id: 'id123',
    name: 'Pioneer LHS ',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkWH-w6MFrwKAQHvelDhXUwFH4ysSB61_BA&usqp=CAU',
  },
  {
    id: 'id124',
    name: 'Precedant Furniture',
    imgURL:
      'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
  },
  {
    id: 'id125',
    name: 'Leverette ',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
  },
  {
    id: 'id126',
    name: 'Briget Accent Table',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
  },
  {
    id: 'id127',
    name: 'Rivet Emerly ',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id128',
    name: 'Home Accent Chair',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id129',
    name: 'Ecobirdy Chair',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id130',
    name: 'Hailey Sofa',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
  },
  {
    id: 'id131',
    name: 'Dining Table',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
  },
  {
    id: 'id132',
    name: 'Evelyn Coffee Table',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id133',
    name: 'Slope Sofa',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id134',
    name: 'Chair & Table',
    imgURL:
      'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
  },
  {
    id: 'id223',
    name: ' Chaise Lounger Grey',
    imgURL:
      'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
  },
  {
    id: 'id224',
    name: 'Precedant Furniture',
    imgURL:
      'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
  },
  {
    id: 'id225',
    name: 'Platform Bed',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
  },
  {
    id: 'id226',
    name: 'Briget Accent Table',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
  },
  {
    id: 'id227',
    name: 'Rivet Emerly',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id228',
    name: 'Flower Accent Chair',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id229',
    name: 'Charlie Chair',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id230',
    name: 'Hailey Sofa',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
  },
  {
    id: 'id231',
    name: 'Slope Nomad Leather Sofa',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
    text: 'Farmhouse Dining Table',
  },
  {
    id: 'id232',
    name: 'Evelyn Coffee Table',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id233',
    name: 'Slope Nomad Leather Sofa',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    id: 'id234',
    name: 'Chair and Table',
    imgURL:
      'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
  },
];
const renderItem = ({item, index}) => {
  console.log(item);
  // function abc() {
  // if (grid.id === '2') {
  // height: h(28), width: w(40)
  //  }
  // }
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  console.log(randomBool);
  return (
    <View
      key={item.id}
      style={[
        {marginTop: 12, flex: 1},
        {marginLeft: index % 2 === 0 ? 0 : 12},
      ]}>
      <Image
        source={{uri: item.imgURL}}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: 'stretch',
          borderRadius: 20,
        }}
        resizeMode="cover"
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const Homefeed = () => {
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
        data={grid}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Homefeed;
