import React from 'react';
import { Image, StyleSheet, View, Dimensions, SafeAreaView, Text } from 'react-native';

const LoginWpp = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/wallpp.jpg')} style={styles.image} />

        <SafeAreaView style={styles.logoContainer}>
          <Text style={styles.logo}>On Earth.</Text>
        </SafeAreaView>
            
        
    </View>
  );
};

export default LoginWpp;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    logo: {
       fontSize: 20,
        position: 'absolute',
        alignSelf: 'center',
        color: 'white',
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
});
