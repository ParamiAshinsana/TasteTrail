import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Signup() {
    return (
        <ImageBackground source={require('../assets/images/sign-img.jpeg')} style={styles.background}>
            <LinearGradient
                colors={['rgba(255, 92, 104, 0.8)', 'rgba(255, 139, 148, 0.8)', 'rgba(255, 255, 186, 0.8)']}
                style={styles.overlay}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>SignUp</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#ffffff"
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmed Password"
                        placeholderTextColor="#ffffff"
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        secureTextEntry
                    />


                    <View style={styles.buttonContainer}>
                        <Button
                            title="Sign Up"
                            color="#ff5c68"
                        />
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 48,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 30,
    },
    input: {
        height: 40,
        width: '100%',
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 10,
        color: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 5,
    },
    buttonContainer: {
        marginTop: 50,
        width: 150,
        borderWidth: 0.5,
        borderColor: '#ffffff',
    },
});