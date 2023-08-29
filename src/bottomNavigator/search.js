import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Search = props => {
  // const PinView = props => {
  //   const {item} = props?.route?.params || {};
  //   const {Title, Description, image} = item || {};

  //   let text = 'River';
  //   useEffect(() => {
  //     fetchData(item);
  //   }, []);

  //   const results = item => {
  //     firebase
  //       .firestore()
  //       .collection('Images')
  //       .orderBy('Title')
  //       .startAt(text)

  //       .get();
  //   };
  //   console.log('Results', results);

  //   const animation = useSharedValue(0);
  //   const animatedStyle = useAnimatedStyle(() => {
  //     return {
  //       width:
  //         animation.value == 1
  //           ? withTiming(300, {duration: 500})
  //           : withTiming(0, {duration: 500}),
  //     };
  //   });
  // };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Animated.View
        style={[
          {
            width: 350,
            height: 50,
            backgroundColor: '#E7E7E7',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <TextInput
          style={{width: '82%'}}
          placeholder={'Search For Pin...'}
          // onChangeText={(text) => this.setState({searchText:text})}
          // onSubmitEditing={() => this.firstSearch()}
          clearButtonMode="always"
        />
        <TouchableOpacity
          onPress={() => {
            // if (animation.value == 1) {
            //   animation.value = 0;
            // } else {
            //   animation.value = 1;
            // }
          }}>
          <Image
            source={require('../../assets/loupe.png')}
            style={{width: 30, height: 30}}></Image>
        </TouchableOpacity>
      </Animated.View>
      <View>
        <Image
          source={require('../../assets/Searchengines-pana(1).png')}
          style={styles.imagesearch}></Image>
      </View>
    </GestureHandlerRootView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  imagesearch: {
    height: 420,
    width: 320,
    alignItems: 'center',

    marginTop: 30,
  },
});

// import React, { useState } from 'react';
// import { View, FlatList, TextInput, Button } from 'react-native';

// const SearchScreen = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     if (searchTerm.trim() === '') return;

//     const results = await searchFirestore(searchTerm);
//     setSearchResults(results);
//   };

//   const renderItem = ({ item }) => (
//     <View>
//       {/* Render your search result item here */}
//     </View>
//   );

//   return (
//     <View>
//       <TextInput
//         placeholder="Search..."
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//       />
//       <Button title="Search" onPress={handleSearch} />

//       <FlatList
//         data={searchResults}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id} // Adjust this based on your data structure
//       />
//     </View>
//   );
// };

// import firestore from '@react-native-firebase/firestore';

// const searchFirestore = async (searchTerm) => {
//   const querySnapshot = await firestore()
//     .collection('yourCollectionName')
//     .where('searchableField', '>=', searchTerm)
//     .where('searchableField', '<=', searchTerm + '\uf8ff')
//     .get();

//   const results = querySnapshot.docs.map((doc) => doc.data());
//   return results;
// };
