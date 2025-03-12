import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (city) => {
        setFavorites(prev => [...prev, city]);
    };

    const removeFromFavorites = (cityId) => {
        setFavorites(prev => prev.filter(city => city.id !== cityId));
    };

    const isFavorite = (cityId) => {
        return favorites.some(city => city.id === cityId);
    };

    return (
        <FavoritesContext.Provider value={{ 
            favorites, 
            addToFavorites, 
            removeFromFavorites, 
            isFavorite 
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext); 