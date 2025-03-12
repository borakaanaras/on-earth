import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1E3A8A',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '150',
        height: '40',
        justifyContent: 'flex-st',
       
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default CustomButton; 