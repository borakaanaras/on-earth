import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapCard from '../Components/MapCard';

const Favorites = () => {
    const [favoriteCities, setFavoriteCities] = useState([]);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favoriteCities');
            if (favorites !== null) {
                setFavoriteCities(JSON.parse(favorites));
            }
        } catch (error) {
            console.error('Favoriler yüklenirken hata:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {favoriteCities.length > 0 ? (
                <FlatList
                    data={favoriteCities}
                    renderItem={({ item }) => <MapCard city={item} />}
                    keyExtractor={item => item.name}
                    contentContainerStyle={styles.listContainer}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Henüz favori şehriniz yok</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContainer: {
        padding: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
    }
});

export default Favorites; 