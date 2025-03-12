import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import FavButton from './FavButton';

const UNSPLASH_ACCESS_KEY = '7Kv-IiRnSGdQRTBni0KyRa5A_2HzQZjg6vdAh_UxxAI';

const MapCard = ({ city, onPress }) => {
    const navigation = useNavigation();
    const defaultImage = require('../assets/Gorseller/Dublin Ireland.jpeg');

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={onPress}
        >
            <Image
                source={city.imageUrl || defaultImage}
                style={styles.image}
                onError={() => {
                    console.log(`${city.name} görsel yükleme hatası`);
                }}
            />

            <View style={styles.textContainer}>
                <Text style={styles.title}>{city.name}</Text>
                <Text style={styles.caption}>{city.caption}</Text>
                <CustomButton 
                    title="Detayları Gör" 
                    onPress={() => navigation.navigate('CityDetail', { city, imageUrl: city.imageUrl })}
                />
                <FavButton city={city} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        marginHorizontal: 20,
        marginBottom: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        height: 340,
        width: 320,
        opacity: 1,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    textContainer: {
        padding: 15,
        marginTop: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        opacity: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    caption: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default MapCard;