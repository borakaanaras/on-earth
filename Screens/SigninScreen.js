import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Switch, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import LoginWpp from '../components/backgrounds/Loginwpp';

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    checkSavedUser();
  }, []);

  const checkSavedUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('userData');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setEmail(userData.email);
        setRememberMe(true);
        
        // Eğer aktif bir oturum varsa
        const user = auth.currentUser;
        if (user) {
          navigation.replace('MainApp');
        }
      }
    } catch (error) {
      console.error('Veri okuma hatası:', error);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      if (rememberMe) {
        await AsyncStorage.setItem('userData', JSON.stringify({
          email,
          rememberMe: true
        }));
      } else {
        await AsyncStorage.removeItem('userData');
      }

      navigation.replace('MainApp');
    } catch (error) {
      let errorMessage = 'Giriş yapılırken bir hata oluştu.';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Geçersiz e-posta adresi.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Kullanıcı bulunamadı.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Hatalı şifre.';
          break;
      }
      
      Alert.alert('Hata', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <LoginWpp />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kaydet.</Text>
        <Text style={styles.title}>Keşfet.</Text>
        <Text style={styles.title}>Tecrübe Et.</Text>
      </View>
      
      <View style={styles.formContainer}>
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

        <View style={styles.rememberMeContainer}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ false: "#767577", true: "#1E3A8A" }}
            thumbColor={rememberMe ? "#fff" : "#f4f3f4"}
          />
          <Text style={styles.rememberMeText}>Beni Hatırla</Text>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Hesabın yok mu?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupButton}>Hesap Oluştur</Text>
          </TouchableOpacity>
        </View>
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
  titleContainer: {
    position: 'absolute',
    top: 180,
    left: 25,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,

  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  formContainer: {
    width: '96%',
    marginTop: 200,
    padding: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    opacity: 0.6,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#1E3A8A',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    top: 30,

  },
  signupText: {
    color: 'white',
    fontSize: 16,
  },
  signupButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  rememberMeText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 14,
  }
});

export default SigninScreen;
