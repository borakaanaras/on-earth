import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const InfoCard = ({ title, description, imageUrl, date }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                {imageUrl ? (
                    <Image 
                        source={{ uri: imageUrl }} 
                        style={styles.image}
                        onError={() => console.log('Görsel yüklenemedi:', title)}
                    />
                ) : (
                    <View style={[styles.image, styles.placeholderImage]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )}
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    {date && <Text style={styles.date}>{date}</Text>}
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: 150,
        backgroundColor: '#f0f0f0',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    placeholderImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
    date: {
        fontSize: 14,
        color: '#666',
        marginLeft: 10,
    },
    description: {
        fontSize: 14,
        color: '#444',
        lineHeight: 20,
    },
});

export default InfoCard; 