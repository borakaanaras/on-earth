import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import LoginWpp from '../components/backgrounds/Loginwpp';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Uyarı', 'Şifreler eşleşmiyor!');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Uyarı', 'Şifre en az 6 karakter olmalıdır.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert(
                'Başarılı',
                'Hesabınız başarıyla oluşturuldu!',
                [
                    {
                        text: 'Tamam',
                        onPress: () => navigation.replace('MainApp')
                    }
                ]
            );
        } catch (error) {
            let errorMessage = 'Kayıt olurken bir hata oluştu.';
            
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'Bu e-posta adresi zaten kullanımda.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Geçersiz e-posta adresi.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage = 'E-posta/şifre girişi etkin değil.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'Şifre çok zayıf.';
                    break;
            }
            
            Alert.alert('Hata', errorMessage);
        }
    };

    return (
        <View style={styles.container}>
            <LoginWpp />
            <View style={styles.formContainer}>
                <Text style={styles.title}>Kayıt Ol</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-posta"
                    placeholderTextColor="#666"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Şifre"
                    placeholderTextColor="#666"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Şifre Tekrar"
                    placeholderTextColor="#666"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSignup}
                >
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => navigation.navigate('SignIn')}
                    style={styles.loginLink}
                >
                    <Text style={styles.loginLinkText}>
                        Zaten hesabın var mı? Giriş yap
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
        opacity: 0.6,
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        backgroundColor: '#1E3A8A',
        padding: 15,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginLink: {
        marginTop: 15,
        alignItems: 'center',
    },
    loginLinkText: {
        color: 'white',
        fontSize: 14,
    }
});

export default SignupScreen;
