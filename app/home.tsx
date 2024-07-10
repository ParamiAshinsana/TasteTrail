import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

export default function Home() {
    const categories = ['Salad', 'Cakes', 'Burger', 'Pancake', 'Smoothies', 'Pizza'];
    const famousFoods = [
        { name: 'Caesar Salad', category: 'Salad', image: require('../assets/images/fruit-salad.jpeg') },
        { name: 'Chocolate Cake', category: 'Cakes', image: require('../assets/images/chocolate-cake.jpeg') },
        { name: 'Cheeseburger', category: 'Burger', image: require('../assets/images/burgerq.jpeg') },
        { name: 'Blueberry Pancake', category: 'Pancake', image: require('../assets/images/blueberry-pancakes.jpeg') },
        { name: 'Strawberry Smoothie', category: 'Smoothies', image: require('../assets/images/strawberry-smoothie.jpeg') },
        { name: 'Pepperoni Pizza', category: 'Pizza', image: require('../assets/images/pepperoni-pizza .jpeg') },
        { name: 'Brownie Milkshake', category: 'Milkshake', image: require('../assets/images/brownie-milkshake.jpeg') },
        { name: 'Raspberry Ice Cream', category: 'Ice Cream', image: require('../assets/images/icecream-raspberries.jpeg') },
        { name: 'Raspberry Cupcake', category: 'Cupcake', image: require('../assets/images/chocolate-raspberry-cupcakes.jpeg') },
    ];

    return (
        <View style={styles.container}>
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
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="home-outline" size={28} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="receipt-outline" size={28} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="card-outline" size={28} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="person-outline" size={28} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffba',
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
        paddingBottom: 0, // Ensure content doesn't overlap with bottom bar
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
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#ffffba',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});
