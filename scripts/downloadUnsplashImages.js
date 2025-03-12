const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { citiesData } = require('../data/citiesData.js');

const UNSPLASH_ACCESS_KEY = '7Kv-IiRnSGdQRTBni0KyRa5A_2HzQZjg6vdAh_UxxAI';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// citiesData'dan arama terimlerini otomatik oluştur
const generateSearchTerms = () => {
    let terms = [];

    citiesData.forEach(city => {
        // Ana şehir görseli
        terms.push({
            search: `${city.name} city panorama`,
            fileName: `${city.name.toLowerCase()}.jpg`
        });

        // Gezilecek yerler
        city.famousPlaces?.forEach(place => {
            terms.push({
                search: `${place.name} ${city.name}`,
                fileName: `${place.name.toLowerCase().replace(/ /g, '_')}.jpg`
            });
        });

        // Müzeler
        city.museums?.forEach(museum => {
            terms.push({
                search: `${museum.name} ${city.name}`,
                fileName: `${museum.name.toLowerCase().replace(/ /g, '_')}.jpg`
            });
        });

        // Mahalleler
        city.neighborhoods?.forEach(neighborhood => {
            terms.push({
                search: `${neighborhood.name} ${city.name}`,
                fileName: `${neighborhood.name.toLowerCase().replace(/ /g, '_')}.jpg`
            });
        });

        // Alışveriş bölgeleri
        city.shoppingAreas?.forEach(area => {
            terms.push({
                search: `${area.name} ${city.name}`,
                fileName: `${area.name.toLowerCase().replace(/ /g, '_')}.jpg`
            });
        });
    });

    return terms;
};

const downloadImage = async (url, fileName) => {
    try {
        const response = await axios({
            url,
            responseType: 'stream',
        });

        const filePath = path.join(__dirname, '../assets/Gorseller', fileName);
        const writer = fs.createWriteStream(filePath);

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => {
                console.log(`✓ İndirildi: ${fileName}`);
                resolve();
            });
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Hata: ${fileName} indirilirken:`, error);
    }
};

const searchAndDownload = async ({ search, fileName }) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query: search,
                per_page: 1
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
            }
        });

        if (response.data.results && response.data.results.length > 0) {
            const imageUrl = response.data.results[0].urls.regular;
            await downloadImage(imageUrl, fileName);
        }
    } catch (error) {
        console.error(`Hata: ${search} aranırken:`, error);
    }
};

const main = async () => {
    // Gorseller klasörünü oluştur
    const dir = path.join(__dirname, '../assets/Gorseller');
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
        console.log('✓ Gorseller klasörü oluşturuldu');
    }

    const searchTerms = generateSearchTerms();
    console.log(`Toplam ${searchTerms.length} görsel indirilecek...`);
    
    // Tüm görselleri sırayla indir
    for (const term of searchTerms) {
        console.log(`Aranıyor: ${term.search}`);
        await searchAndDownload(term);
        // API limit aşımını önlemek için her istek arasında biraz bekle
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('✓ Tüm görseller indirildi!');

    // citiesData'yı güncelle
    updateCitiesData();
};

const updateCitiesData = () => {
    let updatedData = citiesData.map(city => {
        // Şehir görselini güncelle
        const cityImage = `${city.name.toLowerCase()}.jpg`;
        
        // Gezilecek yerlerin görsellerini güncelle
        const updatedPlaces = city.famousPlaces?.map(place => ({
            ...place,
            image: `${place.name.toLowerCase().replace(/ /g, '_')}.jpg`
        }));

        return {
            ...city,
            image: cityImage,
            famousPlaces: updatedPlaces
        };
    });

    // Yeni citiesData'yı dosyaya yaz
    const dataPath = path.join(__dirname, '../data/citiesData.js');
    const fileContent = `export const citiesData = ${JSON.stringify(updatedData, null, 2)};`;
    fs.writeFileSync(dataPath, fileContent);
    console.log('✓ citiesData.js güncellendi');
};

main(); 