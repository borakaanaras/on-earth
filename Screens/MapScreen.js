import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { citiesData } from '../data/citiesData';
import MapCard from '../components/MapCard';
import SearchBar from '../components/SearchBar';

const MapScreen = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const mapRef = useRef(null);

    const handleMapPress = () => {
        setSelectedCity(null);
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        mapRef.current?.animateToRegion({
            latitude: city.coordinate.latitude,
            longitude: city.coordinate.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: 51.1657,
                    longitude: 10.4515,
                    latitudeDelta: 5,
                    longitudeDelta: 5,
                }}
                onPress={handleMapPress}
            >
                {citiesData.map((city) => (
                    <Marker
                        key={`${city.id}-${city.name}`}
                        coordinate={{
                            latitude: city.coordinate.latitude,
                            longitude: city.coordinate.longitude
                        }}
                        title={city.name}
                        onPress={(e) => {
                            e.stopPropagation();
                            handleCitySelect(city);
                        }}
                    >
                        <Image 
                            source={require('../assets/Gorseller/pin.png')} 
                            style={{ width: 28, height: 28 }}
                        />
                    </Marker>
                ))}
            </MapView>

            <SafeAreaView style={styles.searchBarContainer}>
                <SearchBar onCitySelect={handleCitySelect} />
            </SafeAreaView>
            
            {selectedCity && (
                <View style={styles.cardWrapper}>
                    <MapCard city={selectedCity} />
                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchBarContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingTop: 10,
        zIndex: 1,
    },
    cardWrapper: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    }
});

export default MapScreen;


