import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.goBack()}
        >
            <Ionicons name="arrow-back" size={22} color="black" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 8,
        opacity: 0.5,
    }
});

export default BackButton; 