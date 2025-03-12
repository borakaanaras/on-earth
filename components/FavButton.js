import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';

const FavButton = ({ city }) => {
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
    const isCurrentlyFavorite = isFavorite(city.id);

    const toggleFavorite = () => {
        if (isCurrentlyFavorite) {
            removeFromFavorites(city.id);
        } else {
            addToFavorites(city);
        }
    };

    return (

        
        <TouchableOpacity 
            style={styles.button}
            onPress={toggleFavorite}
        >
            <Ionicons 
                name={isCurrentlyFavorite ? "heart" : "heart-outline"} 
                size={28} 
                color={isCurrentlyFavorite ? "red" : "gray"}
            />
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 20,
        opacity: 1,
    }
});

export default FavButton;
