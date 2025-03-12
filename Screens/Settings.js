import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, SafeAreaView, Linking, Alert, StatusBar } from 'react-native';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    const handleDarkMode = (value) => {
        setDarkMode(value);
        if (value) {
            Alert.alert('Bilgi', 'Çok yakında!', [
                { text: 'Tamam!', onPress: () => setDarkMode(false) }
            ]);
        }
    };

    const handleNotifications = (value) => {
        setNotifications(value);
        if (value) {
            Alert.alert('Bilgi', 'Çok yakında!', [
                { text: 'Tamam', onPress: () => setNotifications(false) }
            ]);
        }
    };

    const openInstagram = async () => {
        try {
            await Linking.openURL('https://www.instagram.com/borakaanaras/');
        } catch (error) {
            console.error('Instagram açılırken hata oluştu:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>Ayarlar</Text>
                
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Karanlık Mod</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={handleDarkMode}
                    />
                </View>

                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Bildirimler</Text>
                    <Switch
                        value={notifications}
                        onValueChange={handleNotifications}
                    />
                </View>

                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Dil Seçenekleri</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} onPress={openInstagram}>
                    <Text style={styles.settingText}>Hakkında</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.madeBy}>Made by borakaanaras</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    section: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    settingText: {
        fontSize: 16,
    },
    madeBy: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        
        
    },
});

export default Settings;

