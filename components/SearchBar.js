import React from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { citiesData } from '../data/citiesData';

const SearchBar = ({ onCitySelect }) => {
    const [searchText, setSearchText] = React.useState('');
    const [filteredCities, setFilteredCities] = React.useState([]);

    const handleSearch = (text) => {
        setSearchText(text);
        if (text) {
            const filtered = citiesData.filter(city => 
                city.name.toLowerCase().startsWith(text.toLowerCase())
            );
            setFilteredCities(filtered);
        } else {
            setFilteredCities([]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <Ionicons name="search" size={20} color="#666" />
                <TextInput
                    style={styles.input}
                    placeholder="Şehir ara..."
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>
            {filteredCities.length > 0 && (
                <View style={styles.resultContainer}>
                    <FlatList
                        data={filteredCities}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                style={styles.resultItem}
                                onPress={() => {
                                    onCitySelect(item);
                                    setSearchText('');
                                    setFilteredCities([]);
                                }}
                            >
                                <Text style={styles.resultText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        marginLeft: 10,
        flex: 1,
        fontSize: 16,
    },
    resultContainer: {
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 10,
        maxHeight: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    resultItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    resultText: {
        fontSize: 16,
    }
});

export default SearchBar;