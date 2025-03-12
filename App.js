import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoritesProvider } from './context/FavoritesContext';

import SignupScreen from './Screens/SignupScreen';
import Settings from './Screens/Settings';
import MapScreen from './Screens/MapScreen';
import FavoriteScreen from './Screens/FavoriteScreen';
import CityDetail from './Screens/CityDetail';
import SigninScreen from './Screens/SigninScreen';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// TabNavigator bileşeni
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Harita') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Favoriler') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Ayarlar') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={'#1E3A8A'} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1E3A8A',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Harita" component={MapStack} options={{ headerShown: false }} />
      <Tab.Screen name="Favoriler" component={FavoriteScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Ayarlar" component={Settings} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

// MapStack bileşeni
const MapStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="MapMain" 
        component={MapScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CityDetail" 
        component={CityDetail}
        options={{ 
          title: 'Şehir Detayı',
          headerStyle: {
            backgroundColor: '#FF6F61',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

// Ana uygulama
export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SigninScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="MainApp" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}