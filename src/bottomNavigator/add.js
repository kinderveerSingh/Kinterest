// import {h, w, f} from '../theme/responsive';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   Image,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// const Add = props => {
//   const navigation = useNavigation();
//   const bottomSheetRef = useRef(null);
//   const [getId, setID] = useState(0);
//   const snapPoints = useMemo(() => ['15%', '37%'], []);

//   const handleSheetChanges = useCallback(index => {
//     setID(parseInt(index));
//   }, []);

//   // useEffect(() => {
//   //   const {route} = props;
//   //   setID(route?.params.id);
//   // }, []);
//   return (
//     <GestureHandlerRootView style={styles.mainContainer}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={getId || 0}
//         snapPoints={snapPoints}
//         onChange={handleSheetChanges}>
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.textStyle}>Start Creating Now</Text>
//           </View>
//           <View style={styles.description}>
//             <Pressable
//               onPress={() => {
//                 navigation.navigate('PostPin');
//               }}
//               style={styles.detail}>
//               <Image
//                 source={require('../../assets/checked.png')}
//                 style={styles.iconImage}
//               />
//             </Pressable>

//             <Pressable
//               onPress={() => {
//                 navigation.navigate('PostPin');
//               }}
//               style={styles.detail}>
//               <Image
//                 source={require('../../assets/pin.png')}
//                 style={styles.iconImage}
//               />
//             </Pressable>
//             <Pressable
//               onPress={() => {
//                 navigation.navigate('PostPin');
//               }}
//               style={styles.detail}>
//               <Image
//                 source={require('../../assets/menu.png')}
//                 style={styles.iconImage}
//               />
//             </Pressable>
//           </View>
//           <View style={styles.detail1}>
//             <Text style={styles.textStyle1}>Idea Pin</Text>
//             <Text style={styles.textStyle1}>Pin</Text>
//             <Text style={styles.textStyle1}>Board</Text>
//           </View>
//         </View>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };
// const styles = StyleSheet.create({
//   mainContainer: {
//     //height: h(28),
//     //width: '100%',
//     //borderWidth: 1,
//     //backgroundColor: '#2b2b2b',
//     //borderRadius: 20,
//     //top: 0,
//     //bottom: 0,
//     //left: 0,
//     //right: 0,
//     flex: 1,
//     padding: 25,
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   header: {
//     height: h(4),
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     // paddingRight: 110,
//     // paddingTop: 10,
//     justifyContent: 'center',
//   },
//   headerIcon: {
//     height: h(1.6),
//     width: w(3),
//   },
//   description: {
//     height: h(12),
//     width: '100%',
//     //backgroundColor: 'green',
//     alignItems: 'flex-end',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   detail: {
//     height: h(9),
//     width: w(16.8),
//     //backgroundColor: 'green',
//     borderWidth: 1.5,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   detail1: {
//     height: h(4),
//     width: '100%',
//     //backgroundColor: 'blue',
//     flexDirection: 'row',
//     alignItems: 'baseline',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   iconImage: {
//     height: h(2.7),
//     width: w(5),
//   },
//   button: {
//     height: h(6),
//     width: w(19),
//     backgroundColor: '#d91438',
//     borderWidth: 1,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   textStyle: {
//     fontSize: f(1.46),
//     fontWeight: '600',
//     fontStyle: 'normal',
//     color: 'black',
//   },
//   textStyle1: {
//     fontSize: f(1.35),
//     fontWeight: '600',
//     fontStyle: 'normal',
//     color: 'black',
//   },
// });

// export default Add;
