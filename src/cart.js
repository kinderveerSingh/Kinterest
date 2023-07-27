import {View, Text} from 'react-native';
import React from 'react';

const Cart = () => {
  return (
    <View style>
      {{flex: 1, backgroundColor: 'powderblue'}}
      <Text>C</Text>
    </View>
  );
};

// import React from 'react';
// import {h, w, f} from '../theme/responsive';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   Image,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';

// const Add = () => {
//   return (
//     <GestureHandlerRootView>
//       <View style={styles.mainContainer}>
//         <View style={styles.header}>
//           <Image
//             source={require('../../assets/close.png')}
//             style={styles.headerIcon}
//           />
//           <Text style={styles.textStyle}>Start Creating Now</Text>
//         </View>
//         <View style={styles.description}>
//           <Pressable style={styles.detail}>
//             <Image
//               source={require('../../assets/push-pin.png')}
//               style={styles.iconImage}
//             />
//           </Pressable>

//           <Pressable style={styles.detail}>
//             <Image
//               source={require('../../assets/push-pin.png')}
//               style={styles.iconImage}
//             />
//           </Pressable>
//           <Pressable style={styles.detail}>
//             <Image
//               source={require('../../assets/menu.png')}
//               style={styles.iconImage}
//             />
//           </Pressable>
//         </View>
//         <View style={styles.detail1}>
//           <Text style={styles.textStyle}>Idea Pin</Text>
//           <Text style={styles.textStyle}>Pin</Text>
//           <Text style={styles.textStyle}>Board</Text>
//         </View>
//       </View>
//     </GestureHandlerRootView>
//   );
// };
// const styles = StyleSheet.create({
//   mainContainer: {
//     height: h(28),
//     width: '100%',
//     borderWidth: 1,
//     //backgroundColor: '#2b2b2b',
//     borderRadius: 20,
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   header: {
//     height: h(4),
//     width: '100%',
//     flexDirection: 'row',
//     paddingRight: 110,
//     paddingTop: 10,
//     justifyContent: 'space-around',
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
//     borderWidth: 1,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'grey',
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
//     height: h(2.6),
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
//     fontSize: f(1.1),
//     fontWeight: '600',
//     fontStyle: 'normal',
//     color: 'black',
//   },
// });

// //export default Add;
export default Cart;
