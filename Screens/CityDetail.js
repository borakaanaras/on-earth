import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import InfoCard from '../components/InfoCard';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';
import FavButton from '../components/FavButton';

const UNSPLASH_ACCESS_KEY = '7Kv-IiRnSGdQRTBni0KyRa5A_2HzQZjg6vdAh_UxxAI';

const CuisineSection = ({ cuisine }) => {
    if (!cuisine || cuisine.length === 0) return null;
    
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Yemek Kültürü</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {cuisine.map((item, index) => (
                    <View key={index} style={styles.placeCard}>
                        <Text style={styles.placeName}>{item.name}</Text>
                        <Text style={styles.placeDescription}>{item.description}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const CityDetail = ({ route }) => {
    const { city, imageUrl } = route.params;
    const [loading, setLoading] = useState(true);
    const [cityData, setCityData] = useState(null);
    const [images, setImages] = useState({
        city: null,
        places: {}
    });

    useEffect(() => {
        if (route?.params?.city) {
            console.log("CityDetail'e gelen veri:", route.params.city); // Debug için
            setCityData(route.params.city);
            setLoading(false);
        }
    }, [route]);

    const fetchImage = async (searchTerm) => {
        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}&per_page=1&orientation=landscape`,
                {
                    headers: {
                        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
                    }
                }
            );
            const data = await response.json();
            return data.results?.[0]?.urls?.regular || null;
        } catch (error) {
            console.error('Görsel yüklenirken hata:', error);
            return null;
        }
    };

    useEffect(() => {
        const loadImages = async () => {
            if (!cityData) return;

            try {
                const cityImage = await fetchImage(cityData.name);
                let newImages = { city: cityImage, places: {} };

                // Gezilecek yerler için görseller
                if (cityData.famousPlaces?.length > 0) {
                    for (const place of cityData.famousPlaces) {
                        const image = await fetchImage(place.name);
                        if (image) {
                            newImages.places[place.name] = image;
                        }
                        await new Promise(resolve => setTimeout(resolve, 300));
                    }
                }

                // Yemekler için görseller - sadece yemek ismine göre arama
                if (cityData.cuisine?.length > 0) {
                    for (const cuisine of cityData.cuisine) {
                        const image = await fetchImage(`${cuisine.name} `); // Sadece yemek ismi ve "food" kelimesi
                        if (image) {
                            newImages.places[cuisine.name] = image;
                        }
                        await new Promise(resolve => setTimeout(resolve, 300));
                    }
                }

                setImages(newImages);
            } catch (error) {
                console.error('Görseller yüklenirken hata:', error);
            }
        };

        loadImages();
    }, [cityData]);

    if (loading || !cityData) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.headerImageContainer}>
                <BackButton />
                
                {images.city ? (
                    <Image 
                        source={{ uri: images.city }} 
                        style={styles.headerImage}
                    />
                ) : (
                    <View style={[styles.headerImage, styles.placeholderImage]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )}

                <FavButton city={cityData} style={styles.favButton} />
            </View>

            <View style={styles.cityInfo}>
                <Text style={styles.cityName}>{cityData?.name || 'İsim Yok'}</Text>
                <Text style={styles.cityCaption}> "{cityData?.caption || 'Açıklama Yok'} "</Text>
                
                <View style={styles.infoRow}>
                    <Ionicons name="people-outline" size={22} color="#FF6F61" />
                    <Text style={styles.infoText}>Nüfus: {cityData?.population || 'Belirtilmemiş'}</Text>
                </View>
                
                <View style={styles.infoRow}>
                    <Ionicons name="location-outline" size={22} color="#FF6F61" />
                    <Text style={styles.infoText}>Bölge: {cityData?.state || 'Belirtilmemiş'}</Text>
                </View>  
                <Text style={styles.sectionTitle}>Hakkında </Text>
                <Text style={styles.description}>{cityData?.description || 'Açıklama bulunmuyor'}</Text>
            </View>
                
            {cityData?.transportation && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Ulaşım</Text>
                    <View style={styles.transportContainer}>
                        {cityData.transportation.airplane && (
                            <View style={styles.transportRow}>
                                <Ionicons name="airplane" size={24} color="#666" />
                                <Text style={styles.transportText}>
                                    {cityData.transportation.airplane}
                                </Text>
                            </View>
                        )}
                        {cityData.transportation.train && (
                            <View style={styles.transportRow}>
                                <Ionicons name="train" size={24} color="#666" />
                                <Text style={styles.transportText}>
                                    {cityData.transportation.train}
                                </Text>
                            </View>
                        )}
                        {cityData.transportation.bus && (
                            <View style={styles.transportRow}>
                                <Ionicons name="bus" size={24} color="#666" />
                                <Text style={styles.transportText}>
                                    {cityData.transportation.bus}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            )}

            {cityData?.famousPlaces?.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Gezilecek Yerler</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {cityData.famousPlaces.map((place, index) => (
                            <View key={index} style={styles.cardContainer}>
                                <InfoCard
                                    title={place.name}
                                    description={place.description}
                                    imageUrl={images.places[place.name]}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>
            )}

            <CuisineSection cuisine={cityData.cuisine} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 150,
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImageContainer: {
        width: '100%',
        height: '300',
        backgroundColor: '#f0f0f0',
    },
    headerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    placeholderImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityInfo: {
        padding: 15,
    },
    cityName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    cityCaption: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 10,
        textAlign: 'left',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#666',
        marginLeft: 10,
    },
    description: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
        marginVertical: 10,
    },
    section: {
        padding: 15,
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    transportContainer: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    transportRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    transportText: {
        flex: 1,
        fontSize: 16,
        color: '#666',
        marginLeft: 15,
    },
    cardContainer: {
        width: 280,
        height: 200,
        marginRight: 15,
        marginBottom: 30,
    },
    favButton: {
        position: 'absolute',
        
        right: 40,
        zIndex: 1,
        padding: 8,
    },
    sectionContainer: {
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    placeCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginRight: 15,
        marginBottom: 5,
        width: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    placeName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#1E3A8A',
    },
    placeDescription: {
        fontSize: 14,
        color: '#666',
    },
});

export default CityDetail;
