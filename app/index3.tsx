// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import * as Font from 'expo-font';

// export default function Index3() {
//   const [fontLoaded, setFontLoaded] = useState(false);

//   useEffect(() => {
//     async function loadFont() {
//       await Font.loadAsync({
//         'Vine-Regular': require('./assets/fonts/Vine-Regular.ttf'),
//       });
//       setFontLoaded(true);
//     }
//     loadFont();
//   }, []);

//   if (!fontLoaded) {
//     return null; // Or you can return a loading spinner or some placeholder
//   }

//   return (
//     <LinearGradient
//       colors={['#ff8b94', 'white', '#fffacd']}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.text}>TasteTrail</Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontFamily: 'Vine-Regular',
//     fontSize: 24,
//   },
// });
