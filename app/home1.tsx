import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeDashboard() {
    const categories = ['Salad', 'Cakes', 'Burger', 'Pancake', 'Smoothies', 'Pizza'];
    const famousFoods = [
        { name: 'Caesar Salad', category: 'Salad', image: require('../assets/images/burger.jpeg') },
        { name: 'Chocolate Cake', category: 'Cakes', image: require('../assets/images/burger.jpeg') },
        { name: 'Cheeseburger', category: 'Burger', image: require('../assets/images/burger.jpeg') },
        { name: 'Blueberry Pancake', category: 'Pancake', image: require('../assets/images/burger.jpeg') },
        { name: 'Strawberry Smoothie', category: 'Smoothies', image: require('../assets/images/burger.jpeg') },
        { name: 'Pepperoni Pizza', category: 'Pizza', image: require('../assets/images/burger.jpeg') },
        { name: 'Blueberry Pancake', category: 'Pancake', image: require('../assets/images/burger.jpeg') },
        { name: 'Strawberry Smoothie', category: 'Smoothies', image: require('../assets/images/burger.jpeg') },
        { name: 'Pepperoni Pizza', category: 'Pizza', image: require('../assets/images/burger.jpeg') },
    ];

    return (
      <View style={styles.container}>
          <LinearGradient colors={['#fc818a', '#ffffba']} style={styles.background}>
              <View style={styles.menu}>
                  <Text style={styles.menuText}>Tastetrail</Text>
              </View>
              <ScrollView horizontal style={styles.selectionBar}>
                  {categories.map(category => (
                      <TouchableOpacity key={category} style={styles.categoryButton}>
                          <Text style={styles.categoryText}>{category}</Text>
                      </TouchableOpacity>
                  ))}
              </ScrollView>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                  <View style={styles.grid}>
                      {famousFoods.map(food => (
                          <TouchableOpacity key={food.name} style={styles.card} onPress={() => console.log(`${food.name} clicked!`)}>
                              <Image source={food.image} style={styles.cardImage} />
                              <Text style={styles.cardText}>{food.name}</Text>
                              <Text style={styles.cardCategory}>{food.category}</Text>
                          </TouchableOpacity>
                      ))}
                  </View>
                  <View style={styles.showMoreButtonContainer}>
                      <TouchableOpacity style={styles.showMoreButton} onPress={() => console.log('Show More clicked!')}>
                          <Text style={styles.showMoreButtonText}>Show More</Text>
                      </TouchableOpacity>
                  </View>
              </ScrollView>
          </LinearGradient>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  background: {
      flex: 1,
  },
  menu: {
      height: 60,
      backgroundColor: '#ff5c68',
      justifyContent: 'center',
      alignItems: 'center',
  },
  menuText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
  },
  selectionBar: {
      backgroundColor: '#ff8b94',
      paddingVertical: 10,
  },
  categoryButton: {
      marginHorizontal: 10,
      paddingHorizontal: 15,
      paddingVertical: 5,
      backgroundColor: '#ff5c68',
      borderRadius: 20,
  },
  categoryText: {
      color: '#fff',
      fontSize: 16,
  },
  contentContainer: {
      alignItems: 'center',
      padding: 10,
  },
  grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
  },
  card: {
      width: '30%',
      backgroundColor: '#fff',
      padding: 10,
      marginVertical: 10,
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
  },
  cardImage: {
      width: '100%',
      height: 100,
      borderRadius: 10,
  },
  cardText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 10,
  },
  cardCategory: {
      fontSize: 12,
      color: '#888',
  },
  showMoreButtonContainer: {
      marginTop: 20,
      marginBottom: 30,
      width: '90%',
      alignItems: 'center',
  },
  showMoreButton: {
      backgroundColor: '#ff5c68',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
  },
  showMoreButtonText: {
      color: '#fff',
      fontSize: 16,
  },
});









// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';

// export default function Home() {
//     const categories = ['Salad', 'Cakes', 'Burger', 'Pancake', 'Smoothies', 'Pizza'];
//     const famousFoods = [
//         { name: 'Caesar Salad', category: 'Salad' },
//         { name: 'Chocolate Cake', category: 'Cakes' },
//         { name: 'Cheeseburger', category: 'Burger' },
//         { name: 'Blueberry Pancake', category: 'Pancake' },
//         { name: 'Strawberry Smoothie', category: 'Smoothies' },
//         { name: 'Pepperoni Pizza', category: 'Pizza' },
//     ];

//     return (
//         <View style={styles.container}>
//             <View style={styles.menu}>
//                 <Text style={styles.menuText}>Menu</Text>
//             </View>
//             <ScrollView horizontal style={styles.selectionBar}>
//                 {categories.map(category => (
//                     <TouchableOpacity key={category} style={styles.categoryButton}>
//                         <Text style={styles.categoryText}>{category}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </ScrollView>
//             <ScrollView contentContainerStyle={styles.contentContainer}>
//                 {famousFoods.map(food => (
//                     <View key={food.name} style={styles.card}>
//                         <Text style={styles.cardText}>{food.name}</Text>
//                         <Text style={styles.cardCategory}>{food.category}</Text>
//                     </View>
//                 ))}
//                 <View style={styles.showMoreButtonContainer}>
//                     <Button title="Show More" color="#ff5c68" />
//                 </View>
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffffba',
//     },
//     menu: {
//         height: 60,
//         backgroundColor: '#ff5c68',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     menuText: {
//         color: '#fff',
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     selectionBar: {
//         backgroundColor: '#ff8b94',
//         paddingVertical: 10,
//     },
//     categoryButton: {
//         marginHorizontal: 10,
//         paddingHorizontal: 15,
//         paddingVertical: 5,
//         backgroundColor: '#ff5c68',
//         borderRadius: 20,
//     },
//     categoryText: {
//         color: '#fff',
//         fontSize: 16,
//     },
//     contentContainer: {
//         alignItems: 'center',
//         padding: 10,
//     },
//     card: {
//         width: '90%',
//         backgroundColor: '#fff',
//         padding: 15,
//         marginVertical: 10,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//     },
//     cardText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     cardCategory: {
//         fontSize: 14,
//         color: '#888',
//     },
//     showMoreButtonContainer: {
//         marginTop: 20,
//         marginBottom: 30,
//         width: '90%',
//     },
// });
