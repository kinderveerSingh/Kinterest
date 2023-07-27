import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Button,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {h, f, w} from '../theme/responsive';

const gridssss = [
  {
    id: '1',
    name: 'Nature',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkWH-w6MFrwKAQHvelDhXUwFH4ysSB61_BA&usqp=CAU',
    selected: false,
  },
  {
    id: '2',
    name: 'Quotes',
    image:
      'https://img.freepik.com/free-vector/calligraphic-background-motivational-quote_52683-16294.jpg?size=626&ext=jpg&ga=GA1.1.1903275161.1687851753&semt=ais',
    selected: false,
  },
  {
    id: '3',
    name: 'Technology',
    image:
      'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
    selected: false,
  },
  {
    id: '4',
    name: 'Photography',
    image:
      'https://uploads-ssl.webflow.com/5e86c7170f1ab21474c3f2a4/609bbba89bb59bed67a73d55_sergey-sokolov-yxJavcfExYs-unsplash.jpg',
    selected: false,
  },
  {
    id: '5',
    name: 'Facts',
    image:
      'https://yt3.googleusercontent.com/3tyEOTTjkwOh2QMR0N0fyTTq9Pusrs5Q6Siqs0jBUgp98J3YlGnzkNPwOa7lWYw6JqBwBkMDsTc=s900-c-k-c0x00ffffff-no-rj',
    selected: false,
  },
  {
    id: '6',
    name: 'Art',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXb1AEsbdJIuFKv-IFRXlSnuMbDudqa_bGCw8EeOJQFyprdGV_4V0UdgcIfcyxF_7n6s&usqp=CAU',
    selected: false,
  },
  {
    id: '7',
    name: 'Travel',
    image:
      'https://assets-global.website-files.com/6268ee704c062ad6dcc39250/629f1dae21e30a08b00d6cd4_travel-photography-hashtag.jpeg',
    selected: false,
  },

  {
    id: '8',
    name: 'Food & Drink',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQls4RMQV7a8KCtqYm58-xRshZCG0l-ksSa2w&usqp=CAU',
    selected: false,
  },
  {
    id: '9',
    name: 'Animal',
    image:
      'https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg',
    selected: false,
  },

  {
    id: '10',
    name: 'Landscape',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnkQBu4Yyh21x5b0CA44e-37nHgUVOgFvt_unKf93-UWLz_KOqfZr5n8_Jbk_T0cEVpU&usqp=CAU',
    selected: false,
  },
  {
    id: '11',
    name: 'Supercars',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bWuKCz4gtbALIq4CBCVK47PHCGoSFg1Fzg&usqp=CAU',

    selected: false,
  },
  {
    id: '12',
    name: 'Home Decor',
    image:
      'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
    selected: false,
  },
  {
    id: '13',
    name: 'Coding',
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80',
    selected: false,
  },
  {
    id: '14',
    name: 'Fitness',
    image:
      'https://thumbs.dreamstime.com/b/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-55122231.jpg',
    selected: false,
  },
  {
    id: '15',
    name: 'Education',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOtOt47_wbpSmcNjalC2cDE-U-7MhI_S6kg&usqp=CAU',
    selected: false,
  },
];

const RenderItem = props => {
  const {item, abc, index} = props;
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      style={styles.grid}
      onPress={() => {
        abc(item, selected);
        setSelected(!selected);
      }}>
      <Image
        source={{uri: item.image}}
        style={[
          styles.image,
          {
            borderWidth: selected ? 3 : 0,
          },
        ]}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

const Notification = () => {
  //const {navigation} = props;
  const [selected, setselected] = useState([]);
  const [counter, setCounter] = useState(0);
  const [array, setArray] = useState([]);
  let tempArray = [...array];
  const abc = (item, selected) => {
    console.log('item', item, selected, tempArray.length);
    if (selected) {
      for (let i = 0; i < tempArray.length; i++) {
        console.log('tempArray.id', tempArray, item.id);
        if (tempArray[i].id === item.id) {
          console.log('revome');
          tempArray.splice(i, 1);

          return;
        }
      }
    } else {
      tempArray.push(item);

      console.log('tempArray', tempArray);
    }
    setArray(tempArray);
  };
  console.log('tempArray.length', array);

  const listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.header}>{`Welcome To Pinterest`}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: f(1.7)}}>{`Pick 5 or more topics`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={listHeader}
        numColumns={3}
        data={gridssss}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} abc={abc} />;
        }}
        keyExtractor={item => item.id}
      />
      <View style={styles.inputHeader}>
        <Pressable
          style={[
            styles.inputbutton,
            {
              backgroundColor: array.length < 5 ? 'grey' : 'red',
            },
          ]}
          onPress={() => {
            navigation.navigate('Homefeed');
          }}>
          <Text style={styles.textStyle2}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 3,
    backgroundColor: 'white',
  },

  grid: {
    width: w(33),
    height: h(23),
    paddingHorizontal: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //backgroundColor: 'green',
    marginBottom: 12,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    marginTop: 15,

    //borderWidth: 2,
    borderColor: 'red',
  },
  details: {
    position: 'absolute',
    zIndex: 5,
    paddingTop: 158,
    paddingLeft: 6,
  },
  name: {
    fontSize: f(1.4),
    fontWeight: 'bold',
    color: 'red',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    color: 'white',
  },
  listHeader: {
    height: h(12),
    width: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: f(1.8),
    fontWeight: 'bold',
    color: 'black',
  },
  // headerButton: {
  //   height: h(3.9),
  //   width: 60,
  //   borderWidth: 1,
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   marginLeft: 30,
  // },

  textStyle2: {
    fontWeight: '500',
    fontSize: f(1.4),
    paddingTop: 10,
    color: 'white',
    alignItems: 'center',
  },
  inputHeader: {
    height: h(5.5),
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputbutton: {
    height: h(5.3),
    width: '83%',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderRadius: 20,
    marginTop: 1,
    alignItems: 'center',
  },
});

export default Notification;
