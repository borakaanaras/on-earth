import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import MapCard from '../components/MapCard';
import { StatusBar } from 'expo-status-bar';

const FavoriteScreen = () => {
    const { favorites } = useFavorites();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Favori Şehirler</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {favorites.length === 0 ? (
                    <Text style={styles.emptyText}>Henüz favori şehir eklenmedi</Text>
                ) : (
                    favorites.map(city => (
                        <MapCard 
                            key={city.id}
                            city={city}
                            
                        />
                    ))
                )}
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        padding: 16,
        color: '#333',
    },
    scrollContainer: {
        padding: 16,
    },
    emptyText: {
        textAlign: 'center',
        color: '#666',
        marginTop: 20,
    }
});

export default FavoriteScreen;

