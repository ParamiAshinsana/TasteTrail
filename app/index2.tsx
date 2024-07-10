import { Text, View, StyleSheet, Image, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default function Index2() {


  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "#ff8b94",
    //   }}
    // >
    //   <Text style={styles.text}>TasteTrail</Text>
    // </View>
    <LinearGradient
      colors={['#ff5c68', '#ff8b94', '#ffffba']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/images/foodie.gif')}
          style={styles.gif}
        />
        <Text style={styles.text}>TasteTrail</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started 🍻"
            color="#ff5c68"
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 54,
    color: '#ffffff',
  },
  buttonContainer: {
    marginTop: 50,
    width: 150,
    borderWidth: 0.5,
    borderColor: '#ffffff',
  },
});