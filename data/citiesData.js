export const citiesData = [
    {
        id: '1',
        name: 'Köln',
        caption: 'Gotik mimarinin ve karnavalların şehri',
        description: "Köln, Almanya'nın en eski şehirlerinden biri olup, zengin tarihi ve kültürü ile öne çıkar. Şehrin simgesi olan UNESCO Dünya Mirası listesindeki Köln Katedrali, Gotik mimarinin en etkileyici örneklerindendir. Ren Nehri kıyısında konumlanan şehir, modern sanat müzeleri, canlı gece hayatı ve dünyaca ünlü karnavalı ile her yıl milyonlarca turisti ağırlar. Şehrin kendine has kültürü, yerel bira türü Kölsch ve sıcakkanlı insanları ile benzersiz bir Alman deneyimi sunar. Tarihi Roma kalıntıları, çağdaş sanat galerileri ve dinamik şehir yaşamı, Köln'ü keşfetmek için ideal bir destinasyon haline getirir.",
        population: '1.1 milyon',
        state: 'Kuzey Ren-Vestfalya',
        coordinate: {
            latitude: 50.9375,
            longitude: 6.9603
        },
        transportation: {
            airplane: "Köln Bonn Havalimanı",
            train: "Köln Merkez Tren İstasyonu (Köln Hauptbahnhof)",
            bus: "Köln Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Köln Katedrali',
                description: 'Gotik mimarinin en önemli örneklerinden'
            },
            {
                name: "Hohenzollern Köprüsü",
                description: "Ren Nehri üzerinde yer alan tarihi köprü"
            },
            {
                name: "Alter Markt",
                description: "Tarihi şehir meydanı ve çevresi"
            },
            {
                name: "Flora ve Botanik Bahçesi",
                description: "11 hektarlık alanda 10.000'den fazla bitki türü"
            },
            {
                name: "Melaten Mezarlığı",
                description: "Tarihi mezarlık ve açık hava müzesi"
            }
        ],
        events: [
            {
                name: "Köln Karnavalı",
                searchName: "Cologne Carnival",
                date: "Şubat/Mart",
                description: "Almanya'nın en büyük sokak festivali",
                searchKeywords: "Festival Celebration Parade"
            },
            {
                name: "Köln Işık Festivali",
                date: "Eylül",
                description: "Şehrin tarihi yapılarının ışık gösterileriyle aydınlatıldığı festival"
            },
            {
                name: "Köln Müzik Trienali",
                date: "Mayıs",
                description: "Üç yılda bir düzenlenen klasik müzik festivali"
            },
            {
                name: "Köln Noel Pazarları",
                date: "Aralık",
                description: "Şehrin dört bir yanında kurulan geleneksel Noel pazarları"
            }
        ],
        cuisine: [
            {
                name: "Kölsch Bier",
                description: "Köln'e özgü geleneksel bira türü"
            },
            {
                name: "Himmel un Äd",
                description: "Patates püresi ve kan sucuğundan yapılan geleneksel yemek"
            },
            {
                name: "Halver Hahn",
                description: "Geleneksel peynirli sandviç"
            },
            {
                name: "Döppekoche",
                description: "Patates, yumurta ve soğandan yapılan geleneksel yemek"
            },
            {
                name: "Schweinshaxe",
                description: "Fırında pişirilmiş domuz paçası"
            }
        ],
        museums: [
            {
                name: "Ludwig Müzesi",
                description: "Modern sanat koleksiyonuyla ünlü müze"
            },
            {
                name: "Çikolata Müzesi",
                description: "Çikolatanın tarihini ve yapımını anlatan interaktif müze"
            },
            {
                name: "Roma-Germen Müzesi",
                description: "Roma döneminden kalma eserlerin sergilendiği müze"
            },
            {
                name: "Wallraf-Richartz Müzesi",
                description: "Orta Çağ'dan modern sanata uzanan koleksiyon"
            },
            {
                name: "NS Dokümantasyon Merkezi",
                description: "Nazi dönemini belgeleyen müze"
            }
        ],
        shoppingAreas: [
            {
                name: "Schildergasse",
                description: "Avrupa'nın en işlek alışveriş caddelerinden biri"
            },
            {
                name: "Hohe Straße",
                description: "Tarihi merkezdeki popüler alışveriş bölgesi"
            },
            {
                name: "Ehrenstraße",
                description: "Lüks butikler ve tasarım mağazaları"
            },
            {
                name: "Breite Straße",
                description: "Popüler markaların bulunduğu alışveriş caddesi"
            },
            {
                name: "DuMont Carré",
                description: "Modern alışveriş merkezi"
            }
        ],
        neighborhoods: [
            {
                name: "Ehrenfeld",
                description: "Sanat galerileri ve hip kafeleriyle ünlü trendy mahalle"
            },
            {
                name: "Belgisches Viertel",
                description: "Butik mağazalar ve şık restoranlarıyla bohem mahalle"
            }
        ],
        imageUrl: require('../assets/Gorseller/kolnn.jpg')
    },
    {
        id: '2',
        name: 'Paris',
        caption: 'Sanatın, aşkın ve modanın başkenti',
        description: "Paris, Fransa'nın başkenti ve dünyanın en çok ziyaret edilen şehirlerinden biridir. Şehrin simgesi olan Eyfel Kulesi, UNESCO Dünya Mirası listesindeki Notre-Dame Katedrali ve Louvre Müzesi gibi ikonik yapıları ile tanınır. Seine Nehri kıyısında konumlanan şehir, dünyaca ünlü restoranları, moda butikleri ve sanat galerileri ile kültür tutkunlarını cezbeder. Şehrin kendine özgü atmosferi, cafe kültürü ve romantik sokakları ile benzersiz bir Fransız yaşam tarzı sunar. Tarihi mimari, çağdaş sanat ve gurme lezzetler, Paris'i keşfetmek için ideal bir destinasyon haline getirir.",
        population: '2.2 milyon',
        state: 'Île-de-France',
        coordinate: {
            latitude: 48.8566,
            longitude: 2.3522
        },
        transportation: {
            airplane: "Charles de Gaulle Havalimanı",
            train: "Paris Gare du Nord",
            bus: "Paris Bercy Seine Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Eyfel Kulesi',
                description: "Paris'in sembolü olan 324 metrelik demir kule"
            },
            {
                name: "Louvre Müzesi",
                description: "Dünyanın en büyük sanat müzesi"
            },
            {
                name: "Notre-Dame Katedrali",
                description: "Gotik mimarinin başyapıtı"
            },
            {
                name: "Champs-Élysées",
                description: "Ünlü alışveriş caddesi"
            },
            {
                name: "Versailles Sarayı",
                description: "Kraliyet sarayı ve muhteşem bahçeleri"
            }
        ],
        events: [
            {
                name: "Paris Moda Haftası",
                date: "Şubat/Mart ve Eylül/Ekim",
                description: "Dünya modasının en prestijli etkinliği"
            },
            {
                name: "Bastille Günü",
                date: "14 Temmuz",
                description: "Fransız Ulusal Bayramı kutlamaları"
            },
            {
                name: "Nuit Blanche",
                date: "Ekim",
                description: "Tüm gece süren sanat festivali"
            }
        ],
        cuisine: [
            {
                name: "Croissant",
                description: "Geleneksel Fransız kahvaltı çöreği"
            },
            {
                name: "Coq au Vin",
                description: "Şarapta pişirilmiş tavuk"
            },
            {
                name: "Macarons",
                description: "Renkli Fransız tatlısı"
            }
        ],
        museums: [
            {
                name: "Louvre",
                description: "Dünyanın en ünlü sanat müzesi"
            },
            {
                name: "Orsay Müzesi",
                description: "Empresyonist sanat eserleri"
            },
            {
                name: "Pompidou Merkezi",
                description: "Modern sanat müzesi"
            }
        ],
        shoppingAreas: [
            {
                name: "Champs-Élysées",
                description: "Ünlü alışveriş caddesi"
            },
            {
                name: "Rue du Faubourg Saint-Honoré",
                description: "Lüks moda markalarının bulunduğu caddesi"
            },
            {
                name: "Rue de Rivoli",
                description: "Küçük dükkanlar ve antik pazarları"
            },
            {
                name: "Quartier Latin",
                description: "Akademik çarşıları ve eski kitaplıklar"
            },
            {
                name: "Marais",
                description: "Sanat galerileri, antik pazarlar ve modern mağazalar"
            }
        ],
        neighborhoods: [
            {
                name: "Montmartre",
                description: "Sanatçıların ve bohemlerin buluştuğu sembolik bir semt"
            },
            {
                name: "Le Marais",
                description: "Modern sanat, antik pazarlar ve trendy restoranlar"
            },
            {
                name: "Saint-Germain-des-Prés",
                description: "Kafeler, yazarlar ve akademisyenlerin buluştuğu semt"
            }
        ],
        imageUrl: require('../assets/Gorseller/paris.jpg')
    },
    {
        id: '3',
        name: 'İstanbul',
        imageUrl: require('../assets/Gorseller/istanbul.jpg'),
        caption: 'İki kıtayı birleştiren tarihi ve kültürü metropol',
        description: "İstanbul, Türkiye'nin en büyük şehri ve dünya tarihinin en önemli merkezlerinden biridir. Şehrin simgesi olan Ayasofya, UNESCO Dünya Mirası listesindeki Sultanahmet Camii ve Topkapı Sarayı gibi tarihi yapıları ile ünlüdür. Boğaz'ın iki yakasında konumlanan şehir, geleneksel çarşıları, modern alışveriş merkezleri ve zengin mutfağı ile her yıl milyonlarca turisti ağırlar. Şehrin eşsiz konumu, çok kültürlü yapısı ve misafirperver insanları ile benzersiz bir Türk-İslam medeniyeti deneyimi sunar. Tarihi yarımada, modern iş merkezleri ve canlı gece hayatı, İstanbul'u keşfetmek için ideal bir destinasyon haline getirir.",
        population: '15.8 milyon',
        state: 'Marmara Bölgesi',
        coordinate: {
            latitude: 41.0082,
            longitude: 28.9784
        },
        transportation: {
            airplane: "İstanbul Havalimanı",
            train: "İstanbul Halkalı Tren İstasyonu",
            bus: "İstanbul Otogarı"
        },
        famousPlaces: [
            {
                name: 'Ayasofya',
                description: 'İstanbul\'un sembolü olan tarihi kilise'
            },
            {
                name: "Sultanahmet Camii",
                description: "Tarihi cami ve müze"
            },
            {
                name: "Topkapı Sarayı",
                description: "Osmanlı İmparatorluğu\'nun eski sarayı"
            },
            {
                name: "Grand Bazaar",
                description: "Tarihi çarşı ve alışveriş merkezi"
            },
            {
                name: "Dolmabahçe Sarayı",
                description: "Osmanlı İmparatorluğu\'nun son sarayı"
            }
        ],
        events: [
            {
                name: "İstanbul Uluslararası Film Festivali",
                date: "Ekim",
                description: "Dünyanın en büyük film festivali"
            },
            {
                name: "İstanbul Şiir Festivali",
                date: "Mayıs",
                description: "Dünyanın en büyük şiir festivali"
            },
            {
                name: "İstanbul Müzik Festivali",
                date: "Haziran",
                description: "Klasik müzik ve pop konserleri"
            }
        ],
        cuisine: [
            {
                name: "Köfte",
                description: "İnce ince dilimlenmiş et şeridi"
            },
            {
                name: "Lahmacun",
                description: "İnce hamur üzerine sos, sucuk ve sebzeler"
            },
            {
                name: "Baklava",
                description: "Katmer ve fındıkla yapılan tatlı"
            }
        ],
        museums: [
            {
                name: "İstanbul Modern Sanat Müzesi",
                description: "Modern ve çağdaş sanat eserleri"
            },
            {
                name: "Türk ve İslam Eserleri Müzesi",
                description: "Türk ve İslam sanatının tarihsel eserleri"
            },
            {
                name: "Mimar Sinan Müzesi",
                description: "Osmanlı mimarisi ve eserleri"
            }
        ],
        shoppingAreas: [
            {
                name: "Nişantaşı",
                description: "Lüks moda markaları ve antik pazarlar"
            },
            {
                name: "İstiklal Caddesi",
                description: "Tarihi alışveriş caddesi ve kültür merkezi"
            },
            {
                name: "Kanyon",
                description: "Genç moda ve aksesuarlar"
            },
            {
                name: "Cihangir",
                description: "Antik pazarlar ve kafeler"
            },
            {
                name: "Beyoğlu",
                description: "Tarihi semt ve gece hayatı"
            }
        ],
        neighborhoods: [
            {
                name: "Karaköy",
                description: "Tarihi evler, kafeler ve sanat galerileri"
            },
            {
                name: "Moda",
                description: "Moda merkezi ve tasarım atölyeleri"
            },
            {
                name: "Taksim",
                description: "Modern alışveriş merkezleri ve gece hayatı"
            }
        ],
        
    },
    {
        id: '4',
        name: 'Antalya',
        caption: 'Türk Rivierası\'nın başkenti, tarih ve denizin buluştuğu cennet',
        description: "Antalya, Türkiye'nin en önemli turizm merkezlerinden biri olup, antik kentleri ve doğal güzellikleri ile öne çıkar. Şehrin simgesi olan Kaleiçi, UNESCO Dünya Mirası listesindeki antik Aspendos Tiyatrosu ve muhteşem plajları ile dünyaca ünlüdür. Akdeniz kıyısında konumlanan şehir, lüks otelleri, su parkları ve golf sahaları ile her yıl milyonlarca turisti ağırlar. Şehrin benzersiz iklimi, zengin mutfağı ve misafirperver insanları ile eşsiz bir Akdeniz deneyimi sunar. Antik kalıntılar, doğal parklar ve modern eğlence merkezleri, Antalya'yı keşfetmek için ideal bir destinasyon haline getirir.",
        population: '2.5 milyon',
        state: 'Akdeniz Bölgesi',
        coordinate: {
            latitude: 36.8969,
            longitude: 30.7133
        },
        transportation: {
            airplane: "Antalya Havalimanı",
            train: "Antalya Tren İstasyonu",
            bus: "Antalya Otogarı"
        },
        famousPlaces: [
            {
                name: 'Kaleiçi',
                description: 'Tarihi semt ve liman'
            },
            {
                name: "Aspendos Tiyatrosu",
                description: "Antik Roma döneminde inşa edilmiş tiyatro"
            },
            {
                name: "Düden Waterfall",
                description: "Muhteşem doğal güzellik"
            },
            {
                name: "Konyaaltı Plajı",
                description: "Popüler turistik plaj"
            },
            {
                name: "Kızıl Kale",
                description: "Tarihi kale ve müze"
            }
        ],
        events: [
            {
                name: "Antalya Film Festivali",
                date: "Ekim",
                description: "Uluslararası film festivali"
            },
            {
                name: "Antalya Jazz Festivali",
                date: "Haziran",
                description: "Dünyaca ünlü jazz sanatçıları"
            },
            {
                name: "Antalya Uluslararası Fuarı",
                date: "Eylül",
                description: "Ticari ve endüstriyel etkinlikler"
            }
        ],
        cuisine: [
            {
                name: "Kebap",
                description: "İnce dilimlenmiş et şeridi"
            },
            {
                name: "Mercimek Çorbası",
                description: "Nozlu mercimek çorbası"
            },
            {
                name: "Köfte",
                description: "Kıyma etli yemek"
            }
        ],
        museums: [
            {
                name: "Antalya Arkeoloji Müzesi",
                description: "Antik eserler ve kültür varlıkları"
            },
            {
                name: "Atatürk Müzesi",
                description: "Atatürk'ün hayatı ve çalışmaları"
            },
            {
                name: "Mevlana Müzesi",
                description: "Mevlana Celaleddin-i Rumi'nin hayatı"
            }
        ],
        shoppingAreas: [
            {
                name: "Lara Antik Kenti",
                description: "Antik pazarlar ve mağazalar"
            },
            {
                name: "Kaleiçi",
                description: "Tarihi semt ve alışveriş merkezi"
            },
            {
                name: "Muratpaşa",
                description: "Moda ve aksesuarlar"
            },
            {
                name: "Alara",
                description: "Lüks alışveriş merkezi"
            },
            {
                name: "Aktur",
                description: "Outlet alışveriş merkezi"
            }
        ],
        neighborhoods: [
            {
                name: "Konyaaltı",
                description: "Popüler turistik semt ve plaj"
            },
            {
                name: "Lara",
                description: "Tarihi kent ve plajlar"
            },
            {
                name: "Kumköy",
                description: "Doğal plajlar ve tatil köyü"
            }
        ],
        imageUrl: require('../assets/Gorseller/antalya.jpg')
    },
    {
        id: '5',
        name: 'Madrid',
        caption: 'İspanya\'nın kalbi, sanat ve kültürün başkenti',
        description: "Madrid, İspanya'nın başkenti ve en büyük şehri olup, zengin sanat koleksiyonları ve canlı kültür hayatı ile tanınır. Şehrin simgesi olan Prado Müzesi, Kraliyet Sarayı ve Plaza Mayor gibi ikonik yapıları ile ünlüdür. İber Yarımadası'nın merkezinde konumlanan şehir, tapas barları, flamenko gösterileri ve futbol tutkusu ile her yıl milyonlarca turisti ağırlar. Şehrin karakteristik mimarisi, parkları ve gece hayatı ile benzersiz bir İspanyol yaşam tarzı sunar. Tarihi meydanlar, modern sanat galerileri ve gurme restoranlar, Madrid'i keşfetmek için ideal bir destinasyon haline getirir.",
        population: '3.3 milyon',
        state: 'Madrid Özerk Bölgesi',
        coordinate: {
            latitude: 40.4168,
            longitude: -3.7038
        },
        transportation: {
            airplane: "Madrid Barajas Havalimanı",
            train: "Madrid Atocha Tren İstasyonu",
            bus: "Madrid Sur Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Prado Müzesi',
                description: 'Dünyanın en önemli sanat müzelerinden biri'
            },
            {
                name: "Plaza Mayor",
                description: "Madrid'in tarihi ana meydanı"
            },
            {
                name: "Retiro Parkı",
                description: "Şehrin en büyük parkı ve yeşil alanı"
            },
            {
                name: "Royal Palace",
                description: "İspanya Kraliyet Ailesi'nin resmi rezidansı"
            }
        ],
        events: [
            {
                name: "San Isidro Festivali",
                date: "Mayıs",
                description: "Madrid'in en büyük geleneksel festivali"
            },
            {
                name: "Madrid Karnavalı",
                date: "Şubat/Mart",
                description: "Renkli kostümler ve sokak partileri"
            }
        ],
        cuisine: [
            {
                name: "Cocido Madrileño",
                description: "Geleneksel Madrid yahni yemeği"
            },
            {
                name: "Bocadillo de Calamares",
                description: "Kalamar sandviçi"
            }
        ],
        museums: [
            {
                name: "Prado Müzesi",
                description: "Klasik sanat eserleri koleksiyonu"
            },
            {
                name: "Reina Sofia Müzesi",
                description: "Modern ve çağdaş sanat müzesi"
            }
        ],
        shoppingAreas: [
            {
                name: "Gran Via",
                description: "Madrid'in ana alışveriş caddesi"
            },
            {
                name: "Salamanca",
                description: "Lüks butikler bölgesi"
            }
        ],
        neighborhoods: [
            {
                name: "Malasaña",
                description: "Hipster ve alternatif kültür mahallesi"
            },
            {
                name: "La Latina",
                description: "Tapas barları ve gece hayatıyla ünlü semt"
            }
        ],
        imageUrl: require('../assets/Gorseller/madridd.jpg')
    },
    {
        id: '10',
        name: 'Londra',
        caption: 'Tarihi ve modern yaşamın harmanlandığı küresel metropol',
        description: "Londra, Birleşik Krallık'ın başkenti ve dünyanın en önemli kültür merkezlerinden biridir. Şehrin simgesi olan Big Ben, Tower Bridge ve Buckingham Sarayı gibi tarihi yapıları ile dünyaca ünlüdür. Thames Nehri kıyısında konumlanan şehir, müzeleri, tiyatroları ve parkları ile her yıl milyonlarca turisti ağırlar. Şehrin çok kültürlü yapısı, geleneksel pub'ları ve modern sanat galerileri ile benzersiz bir İngiliz deneyimi sunar. Kraliyet yapıları, antika pazarları ve canlı müzik sahneleri, Londra'yı keşfetmek için ideal bir destinasyon haline getirir.",
        population: '9 milyon',
        state: 'Greater London, Birleşik Krallık',
        coordinate: {
            latitude: 51.5074,
            longitude: -0.1278
        },
        transportation: {
            airplane: "Heathrow Havalimanı",
            train: "London King's Cross İstasyonu",
            bus: "Victoria Coach Station"
        },
        cuisine: [
            {
                name: "Fish and Chips",
                description: "Geleneksel İngiliz balık ve patates kızartması"
            },
            {
                name: "Sunday Roast",
                description: "Geleneksel İngiliz fırın yemeği"
            },
            {
                name: "English Breakfast",
                description: "Tam İngiliz kahvaltısı"
            },
            {
                name: "Shepherd's Pie",
                description: "Kıymalı ve patates püreli geleneksel yemek"
            }
        ],
        imageUrl: require('../assets/Gorseller/london.jpg')
    },
    {
        id: '11',
        name: 'Moskova',
        caption: 'Rusya\'nın kalbi, tarihi ve kültürel zenginliğin merkezi',
        description: "Moskova, Rusya'nın başkenti ve en büyük şehridir. Şehrin simgesi olan Kızıl Meydan, Kremlin Sarayı ve Aziz Vasil Katedrali gibi ikonik yapıları ile dünyaca ünlüdür. Moskova Nehri kıyısında konumlanan şehir, görkemli metro istasyonları, sanat galerileri ve parkları ile her yıl milyonlarca turisti ağırlar. Şehrin karakteristik mimarisi, Bolşoy Balesi ve zengin müzeleri ile benzersiz bir Rus kültürü deneyimi sunar. Tarihi yapılar, modern alışveriş merkezleri ve canlı gece hayatı, Moskova'yı keşfetmek için ideal bir destinasyon haline getirir.",
        population: '12.5 milyon',
        state: 'Moskova Federal Şehri, Rusya',
        coordinate: {
            latitude: 55.7558,
            longitude: 37.6173
        },
        transportation: {
            airplane: "Şeremetyevo Uluslararası Havalimanı",
            train: "Kievsky Tren İstasyonu",
            bus: "Moskova Merkez Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Borsch",
                description: "Geleneksel Rus pancar çorbası"
            },
            {
                name: "Beef Stroganoff",
                description: "Kremalı dana eti yemeği"
            },
            {
                name: "Pelmeni",
                description: "Rus mantısı"
            },
            {
                name: "Blini",
                description: "Rus krepleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/moskow.jpg')
    },
    {
        id: '12',
        name: 'Budapeşte',
        caption: 'Tuna\'nın incisi, termal suların ve Art Nouveau mimarisinin başkenti',
        description: "Budapeşte, Macaristan'ın başkenti ve en büyük şehri olup, muhteşem mimarisi ve termal kaplıcaları ile ünlüdür. Şehrin simgesi olan Parlamento Binası, Balıkçı Tabyası ve Zincirli Köprü gibi tarihi yapıları ile dünyaca tanınır. Tuna Nehri'nin iki yakasında konumlanan şehir, tarihi hamamları, kafeleri ve şarap mahzenleri ile her yıl milyonlarca turisti ağırlar. Şehrin Art Nouveau mimarisi, geleneksel mutfağı ve kültürel festivalleri ile benzersiz bir Orta Avrupa deneyimi sunar. Tarihi kaleler, modern sanat galerileri ve romantik sokakları, Budapeşte'yi keşfetmek için ideal bir destinasyon haline getirir.",
        population: '1.7 milyon',
        state: 'Orta Macaristan Bölgesi, Macaristan',
        coordinate: {
            latitude: 47.4979,
            longitude: 19.0402
        },
        transportation: {
            airplane: "Ferenc Liszt Uluslararası Havalimanı",
            train: "Keleti Pályaudvar Tren İstasyonu",
            bus: "Népliget Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Gulaş",
                description: "Geleneksel Macar et yahnisi"
            },
            {
                name: "Lángos",
                description: "Kızarmış hamur üstü çeşitli malzemelerle"
            },
            {
                name: "Töltött Káposzta",
                description: "Lahana sarması"
            },
            {
                name: "Kürtőskalács",
                description: "Baca şeklinde tatlı hamur işi"
            }
        ],
        imageUrl: require('../assets/Gorseller/budapest.jpg')
    },
    {
        id: '13',
        name: 'Seul',
        caption: 'Geleneksel kültür ve ileri teknolojinin buluştuğu dinamik metropol',
        description: "Seul, Güney Kore'nin başkenti ve en büyük şehri olup, modern teknoloji ve geleneksel kültürün muhteşem uyumu ile öne çıkar. Şehrin simgesi olan Gyeongbokgung Sarayı, N Seoul Kulesi ve Dongdaemun Design Plaza gibi yapıları ile dünyaca ünlüdür. Han Nehri kıyısında konumlanan şehir, K-pop kültürü, sokak yemekleri ve gece pazarları ile her yıl milyonlarca turisti ağırlar. Şehrin yüksek teknolojili altyapısı, geleneksel hanok evleri ve dinamik gençlik kültürü ile benzersiz bir Kore deneyimi sunar. Tarihi tapınaklar, modern alışveriş bölgeleri ve 24 saat yaşayan sokakları, Seul'ü keşfetmek için ideal bir destinasyon haline getirir.",
        population: '9.7 milyon',
        state: 'Seul Özel Şehri, Güney Kore',
        coordinate: {
            latitude: 37.5665,
            longitude: 126.9780
        },
        transportation: {
            airplane: "Incheon Uluslararası Havalimanı",
            train: "Seul İstasyonu",
            bus: "Seul Express Bus Terminal"
        },
        cuisine: [
            {
                name: "Kimchi",
                description: "Fermente edilmiş geleneksel Kore lahana turşusu"
            },
            {
                name: "Bulgogi",
                description: "Marine edilmiş ızgara et"
            },
            {
                name: "Bibimbap",
                description: "Pirinç üzerine sebze ve et karışımı"
            },
            {
                name: "Tteokbokki",
                description: "Baharatlı pirinç keki"
            }
        ],
        imageUrl: require('../assets/Gorseller/seoul.jpg')
        
    },
    {
        id: '14',
        name: 'Cape Town',
        caption: 'Afrika\'nın güneyinde doğal güzellikler ve kültürel zenginliğin buluşma noktası',
        description: "Cape Town, Güney Afrika'nın en eski şehri ve kıtanın en popüler turistik merkezlerinden biridir. Şehrin simgesi olan Masa Dağı, Robben Adası ve Victoria & Alfred Waterfront gibi doğal ve tarihi yapıları ile ünlüdür. Atlas ve Hint Okyanuslarının buluştuğu noktada konumlanan şehir, muhteşem plajları, bağ evleri ve safari turları ile her yıl milyonlarca turisti ağırlar. Şehrin eşsiz coğrafyası, zengin tarihi ve çok kültürlü yapısı ile benzersiz bir Afrika deneyimi sunar. Botanik bahçeleri, renkli mahalleler ve yerel pazarlar, Cape Town'u keşfetmek için ideal bir destinasyon haline getirir.",
        population: '4.6 milyon',
        state: 'Batı Cape Eyaleti, Güney Afrika',
        coordinate: {
            latitude: -33.9249,
            longitude: 18.4241
        },
        transportation: {
            airplane: "Cape Town Uluslararası Havalimanı",
            train: "Cape Town Tren İstasyonu",
            bus: "MyCiTi Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Bobotie",
                description: "Geleneksel Güney Afrika köfte yemeği"
            },
            {
                name: "Braai",
                description: "Geleneksel Güney Afrika ızgara yemekleri"
            },
            {
                name: "Bunny Chow",
                description: "Kırmızı etli köfte"
            },
            {
                name: "Bobotie",
                description: "Geleneksel Güney Afrika köfte yemeği"
            },
        ],
        imageUrl: require('../assets/Gorseller/capetown.jpg')
    },
    
    {
        id: '15',
        name: 'Dubai',
        caption: 'Çölün ortasında yükselen modern mimari ve lüks yaşamın başkenti',
        description: "Dubai, Birleşik Arap Emirlikleri'nin en büyük şehri ve dünyanın en hızlı gelişen metropollerinden biridir. Şehrin simgesi olan Burj Khalifa, Palm Jumeirah ve Dubai Mall gibi modern yapıları ile dünyaca ünlüdür. Çöl ile denizin buluştuğu noktada konumlanan şehir, lüks alışveriş merkezleri, yapay adaları ve çöl safarileri ile her yıl milyonlarca turisti ağırlar. Şehrin futuristik mimarisi, geleneksel çarşıları ve zengin Arap kültürü ile benzersiz bir Orta Doğu deneyimi sunar. Ultra-modern gökdelenler, altın çarşıları ve eğlence merkezleri, Dubai'yi keşfetmek için ideal bir destinasyon haline getirir.",
        population: '3.4 milyon',
        state: 'Dubai Emirliği, Birleşik Arap Emirlikleri',
        coordinate: {
            latitude: 25.2048,
            longitude: 55.2708
        },
        transportation: {
            airplane: "Dubai Uluslararası Havalimanı",
            train: "Dubai Metro İstasyonu",
            bus: "Al Ghubaiba Otobüs İstasyonu"
        },
        famousPlaces: [
            {
                name: 'Burj Khalifa',
                description: 'Dünyanın en yüksek binası'
            },
            {
                name: "Palm Jumeirah",
                description: "Palmiye şeklinde yapay ada"
            },
            {
                name: "Dubai Mall",
                description: "Dünyanın en büyük alışveriş merkezlerinden biri"
            },
            {
                name: "Burj Al Arab",
                description: "Yelken şeklindeki lüks otel"
            }
        ],
        cuisine: [
            {
                name: "Shawarma",
                description: "Geleneksel Arap döner kebabı"
            },
            {
                name: "Hummus",
                description: "Nohut püresi mezesi"
            },
            {
                name: "Machbous",
                description: "Baharatlı pilav ve et yemeği"
            },
            {
                name: "Luqaimat",
                description: "Tatlı hamur topları"
            }
        ],
        imageUrl: require('../assets/Gorseller/dubai.jpg')
    },
    {
        id: '16',
        name: 'Tokyo',
        caption: 'Gelenek ve teknolojinin harmonisi, modern Japonya\'nın kalbi',
        description: "Tokyo, Japonya'nın başkenti ve dünyanın en büyük metropollerinden biridir. Şehrin simgesi olan Shibuya Kavşağı, Senso-ji Tapınağı ve Tokyo Kulesi gibi modern ve geleneksel yapıları ile ünlüdür. Pasifik Okyanusu kıyısında konumlanan şehir, teknoloji mağazaları, anime kültürü ve Michelin yıldızlı restoranları ile her yıl milyonlarca turisti ağırlar. Şehrin benzersiz düzeni, metro sistemi ve geleneksel bahçeleri ile eşsiz bir Japon yaşam tarzı sunar. Neon ışıklı sokaklar, sessiz tapınaklar ve gurme mutfağı, Tokyo'yu keşfetmek için ideal bir destinasyon haline getirir.",
        population: '37.4 milyon',
        state: 'Tokyo Metropolü, Japonya',
        coordinate: {
            latitude: 35.6762,
            longitude: 139.6503
        },
        transportation: {
            airplane: "Narita Uluslararası Havalimanı",
            train: "Tokyo Merkez İstasyonu",
            bus: "Shinjuku Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Shibuya Kavşağı',
                description: 'Dünyanın en meşhur yaya geçidi'
            },
            {
                name: "Senso-ji Tapınağı",
                description: "Tokyo'nun en eski Budist tapınağı"
            },
            {
                name: "Tokyo Skytree",
                description: "Japonya'nın en yüksek kulesi"
            },
            {
                name: "Meiji Tapınağı",
                description: "Şehrin en önemli Shinto tapınağı"
            }
        ],
        cuisine: [
            {
                name: "Sushi",
                description: "Geleneksel Japon pirinç ve deniz ürünleri"
            },
            {
                name: "Ramen",
                description: "Japon noodle çorbası"
            },
            {
                name: "Tempura",
                description: "Kızarmış deniz ürünleri ve sebzeler"
            },
            {
                name: "Wagyu",
                description: "Premium Japon sığır eti"
            }
        ],
        imageUrl: require('../assets/Gorseller/tokyo.jpg')
    },
    {
        id: '18',
        name: 'Roma',
        caption: 'Ebedi Şehir, antik tarihin ve sanatın merkezi',
        description: "Roma, İtalya'nın başkenti ve dünyanın en önemli tarihi merkezlerinden biridir. Şehrin simgesi olan Kolezyum, Vatikan ve Trevi Çeşmesi gibi antik yapıları ile dünyaca ünlüdür. Tiber Nehri kıyısında konumlanan şehir, tarihi meydanları, sanat eserleri ve İtalyan mutfağı ile her yıl milyonlarca turisti ağırlar. Şehrin antik kalıntıları, Rönesans sanatı ve dolce vita yaşam tarzı ile benzersiz bir İtalyan deneyimi sunar.",
        population: '4.3 milyon',
        state: 'Lazio Bölgesi, İtalya',
        coordinate: {
            latitude: 41.9028,
            longitude: 12.4964
        },
        transportation: {
            airplane: "Roma Fiumicino Havalimanı",
            train: "Roma Termini İstasyonu",
            bus: "Roma Tiburtina Otobüs Terminali"
        }
    },
    {
        id: '19',
        name: 'Amsterdam',
        caption: 'Kanallar şehri, bisiklet ve sanatın başkenti',
        description: "Amsterdam, Hollanda'nın başkenti ve en önemli kültür merkezlerinden biridir. Şehrin simgesi olan tarihi kanalları, Anne Frank Evi ve Van Gogh Müzesi gibi yapıları ile dünyaca ünlüdür. IJ Nehri kıyısında konumlanan şehir, bisiklet kültürü, sanat galerileri ve tarihi evleri ile her yıl milyonlarca turisti ağırlar. Şehrin liberal atmosferi, cafe kültürü ve modern sanat anlayışı ile benzersiz bir Hollanda deneyimi sunar.",
        population: '1.1 milyon',
        state: 'Kuzey Hollanda Eyaleti, Hollanda',
        coordinate: {
            latitude: 52.3676,
            longitude: 4.9041
        },
        transportation: {
            airplane: "Amsterdam Schiphol Havalimanı",
            train: "Amsterdam Centraal İstasyonu",
            bus: "Amsterdam Sloterdijk Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Stamppot",
                description: "Patates püresi ve sebze karışımı"
            },
            {
                name: "Bitterballen",
                description: "Geleneksel Hollanda köfteleri"
            },
            {
                name: "Stroopwafel",
                description: "Karamelli gofret"
            },
            {
                name: "Haring",
                description: "Taze ringa balığı"
            }
        ],
        imageUrl: require('../assets/Gorseller/amsterdam.jpg')
    },
    {
        id: '20',
        name: 'Viyana',
        caption: 'Klasik müzik ve imperial mimarinin başkenti',
        description: "Viyana, Avusturya'nın başkenti ve kültür merkezidir. Şehrin simgesi olan Schönbrunn Sarayı, St. Stephen Katedrali ve Opera Binası gibi görkemli yapıları ile ünlüdür. Tuna Nehri kıyısında konumlanan şehir, klasik müzik konserleri, kafeler ve sanat müzeleri ile her yıl milyonlarca turisti ağırlar. Şehrin imperial mimarisi, kahve kültürü ve Klimt eserleri ile benzersiz bir Avusturya deneyimi sunar.",
        population: '1.9 milyon',
        state: 'Viyana Eyaleti, Avusturya',
        coordinate: {
            latitude: 48.2082,
            longitude: 16.3738
        },
        transportation: {
            airplane: "Viyana Uluslararası Havalimanı",
            train: "Wien Hauptbahnhof",
            bus: "Vienna International Busterminal"
        },
        cuisine: [
            {
                name: "Wiener Schnitzel",
                description: "Viyana usulü pane et"
            },
            {
                name: "Sachertorte",
                description: "Meşhur çikolatalı pasta"
            },
            {
                name: "Apfelstrudel",
                description: "Elmalı strudel tatlısı"
            },
            {
                name: "Tafelspitz",
                description: "Haşlanmış dana eti"
            }
        ],
        imageUrl: require('../assets/Gorseller/vienna.jpg')
    },
    {
        id: '21',
        name: 'Prag',
        caption: 'Orta Avrupa\'nın altın şehri, gotik mimarinin merkezi',
        description: "Prag, Çek Cumhuriyeti'nin başkenti ve en büyük şehridir. Şehrin simgesi olan Charles Köprüsü, Astronomik Saat ve Prag Kalesi gibi tarihi yapıları ile ünlüdür. Vltava Nehri kıyısında konumlanan şehir, gotik mimarisi, bira kültürü ve müzik festivalleri ile her yıl milyonlarca turisti ağırlar. Şehrin masalsı atmosferi, tarihi meydanları ve yerel mutfağı ile benzersiz bir Orta Avrupa deneyimi sunar.",
        population: '1.3 milyon',
        state: 'Prag Bölgesi, Çek Cumhuriyeti',
        coordinate: {
            latitude: 50.0755,
            longitude: 14.4378
        },
        transportation: {
            airplane: "Václav Havel Havalimanı",
            train: "Praha Hlavní Nádraží",
            bus: "Florenc Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Svíčková",
                description: "Kremalı sığır eti"
            },
            {
                name: "Trdelník",
                description: "Geleneksel tatlı hamur işi"
            },
            {
                name: "Guláš",
                description: "Çek usulü gulyas"
            },
            {
                name: "Vepřo Knedlo Zelo",
                description: "Domuz eti, knödel ve lahana"
            }
        ],
        imageUrl: require('../assets/Gorseller/prag.jpg')
    },
    {
        id: '22',
        name: 'Venedik',
        caption: 'Kanallar üzerinde yüzen romantik sanat şehri',
        description: "Venedik, İtalya'nın en özgün şehirlerinden biridir. Şehrin simgesi olan San Marco Meydanı, Rialto Köprüsü ve Dükler Sarayı gibi tarihi yapıları ile ünlüdür. Adriyatik Denizi'ndeki lagünde konumlanan şehir, gondol turları, karnavalı ve cam sanatı ile her yıl milyonlarca turisti ağırlar. Şehrin su üzerindeki mimarisi, sanat galerileri ve tarihi atmosferi ile benzersiz bir İtalyan deneyimi sunar.",
        population: '260 bin',
        state: 'Veneto Bölgesi, İtalya',
        coordinate: {
            latitude: 45.4408,
            longitude: 12.3155
        },
        transportation: {
            airplane: "Marco Polo Havalimanı",
            train: "Venezia Santa Lucia İstasyonu",
            bus: "Piazzale Roma Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Risotto al Nero di Seppia",
                description: "Mürekkep balıklı risotto"
            },
            {
                name: "Baccalà Mantecato",
                description: "Kremalı morina balığı ezmesi"
            },
            {
                name: "Sarde in Saor",
                description: "Marineli sardalya"
            },
            {
                name: "Bigoli in Salsa",
                description: "Ançüezli makarna"
            }
        ],
        imageUrl: require('../assets/Gorseller/venice.jpg')
    },
    {
        id: '23',
        name: 'Bangkok',
        caption: 'Tapınaklar şehri, Güneydoğu Asya\'nın dinamik metropolü',
        description: "Bangkok, Tayland'ın başkenti ve en büyük şehridir. Şehrin simgesi olan Büyük Saray, Wat Phra Kaew ve Wat Arun tapınakları gibi ihtişamlı yapıları ile ünlüdür. Chao Phraya Nehri kıyısında konumlanan şehir, sokak yemekleri, gece pazarları ve masaj salonları ile her yıl milyonlarca turisti ağırlar. Şehrin altın tapınakları, modern alışveriş merkezleri ve egzotik mutfağı ile benzersiz bir Tayland deneyimi sunar.",
        population: '8.3 milyon',
        state: 'Bangkok Metropol Bölgesi, Tayland',
        coordinate: {
            latitude: 13.7563,
            longitude: 100.5018
        },
        transportation: {
            airplane: "Suvarnabhumi Havalimanı",
            train: "Hua Lamphong İstasyonu",
            bus: "Mo Chit Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Pad Thai",
                description: "Tavuklu erişte"
            },
            {
                name: "Tom Yum Goong",
                description: "Ekşili baharatlı karides çorbası"
            },
            {
                name: "Som Tam",
                description: "Papaya salatası"
            },
            {
                name: "Mango Sticky Rice",
                description: "Mangolu yapışkan pirinç tatlısı"
            }
        ],
        imageUrl: require('../assets/Gorseller/bangkok.jpg')
    },
    {
        id: '24',
        name: 'Singapur',
        caption: 'Modern mimarinin ve çok kültürlülüğün ada devleti',
        description: "Singapur, Güneydoğu Asya'nın en modern şehir devletidir. Şehrin simgesi olan Marina Bay Sands, Gardens by the Bay ve Merlion gibi modern yapıları ile ünlüdür. Malaka Boğazı'nda konumlanan şehir, hawker merkezleri, botanik bahçeleri ve alışveriş merkezleri ile her yıl milyonlarca turisti ağırlar. Şehrin çok kültürlü yapısı, temiz sokakları ve füzyon mutfağı ile benzersiz bir Asya deneyimi sunar.",
        population: '5.7 milyon',
        state: 'Singapur Cumhuriyeti',
        coordinate: {
            latitude: 1.3521,
            longitude: 103.8198
        },
        transportation: {
            airplane: "Changi Havalimanı",
            train: "Woodlands Tren İstasyonu",
            bus: "Golden Mile Complex"
        },
        cuisine: [
            {
                name: "Chili Crab",
                description: "Acılı yengeç"
            },
            {
                name: "Hainanese Chicken Rice",
                description: "Tavuklu pirinç"
            },
            {
                name: "Laksa",
                description: "Hindistan cevizli noodle çorbası"
            },
            {
                name: "Satay",
                description: "Soslu ızgara et şişleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/singapur.jpg')
    },
    {
        id: '25',
        name: 'Hong Kong',
        caption: 'Gökdelenler ve geleneklerin buluştuğu liman şehri',
        description: "Hong Kong, Çin'in özel idari bölgesi ve önemli bir finans merkezidir. Victoria Tepesi, Tian Tan Buddha ve Tsim Sha Tsui sahili gibi ikonik noktaları ile ünlüdür. Güney Çin Denizi kıyısında konumlanan şehir, dim sum restoranları, gece pazarları ve alışveriş merkezleri ile turistleri cezbeder.",
        population: '7.5 milyon',
        state: 'Hong Kong Özel İdari Bölgesi, Çin',
        coordinate: {
            latitude: 22.3193,
            longitude: 114.1694
        },
        transportation: {
            airplane: "Hong Kong Uluslararası Havalimanı",
            train: "Hong Kong İstasyonu",
            bus: "Elements Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Dim Sum",
                description: "Çeşitli buharda pişmiş atıştırmalıklar"
            },
            {
                name: "Roast Goose",
                description: "Kızarmış kaz"
            },
            {
                name: "Wonton Noodles",
                description: "Mantılı noodle çorbası"
            },
            {
                name: "Egg Tart",
                description: "Yumurtalı tart tatlısı"
            }
        ],
        imageUrl: require('../assets/Gorseller/hongkong.jpg')
    },
    {
        id: '64',
        name: 'San Francisco',
        caption: 'Altın Kapı Köprüsü\'nün teknoloji vadisi',
        description: "San Francisco, ABD'nin en önemli teknoloji ve kültür merkezlerinden biridir. Golden Gate Köprüsü, Alcatraz Adası ve cable car'ları ile dünyaca ünlüdür. Pasifik Okyanusu kıyısında konumlanan şehir, Silikon Vadisi, Fisherman's Wharf ve Çin Mahallesi ile her yıl milyonlarca turisti ağırlar.",
        population: '883 bin',
        state: 'California Eyaleti, Amerika Birleşik Devletleri',
        coordinate: {
            latitude: 37.7749,
            longitude: -122.4194
        },
        transportation: {
            airplane: "San Francisco Uluslararası Havalimanı",
            train: "San Francisco Caltrain İstasyonu",
            bus: "Salesforce Transit Center"
        },
        cuisine: [
            {
                name: "Clam Chowder",
                description: "Midye çorbası"
            },
            {
                name: "Mission Burrito",
                description: "San Francisco tarzı burrito"
            },
            {
                name: "Cioppino",
                description: "Deniz ürünleri çorbası"
            },
            {
                name: "Sourdough Bread",
                description: "Ekşi maya ekmek"
            }
        ],
        imageUrl: require('../assets/Gorseller/sanfrancisco.jpg')
    },
    {
        id: '26',
        name: 'Sydney',
        caption: 'Opera Binası\'nın ikonik liman şehri',
        description: "Sydney, Avustralya'nın en büyük şehri ve önemli bir turizm merkezidir. Opera Binası, Harbour Bridge ve Bondi Plajı gibi ikonik yapıları ile dünyaca ünlüdür. Pasifik Okyanusu kıyısında konumlanan şehir, plajları, botanik bahçeleri ve modern mimarisi ile her yıl milyonlarca turisti ağırlar.",
        population: '5.3 milyon',
        state: 'New South Wales Eyaleti, Avustralya',
        coordinate: {
            latitude: -33.8688,
            longitude: 151.2093
        },
        transportation: {
            airplane: "Sydney Kingsford Smith Havalimanı",
            train: "Central Station",
            bus: "Central Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Meat Pie",
                description: "Etli turta"
            },
            {
                name: "Barramundi",
                description: "Avustralya levreği"
            },
            {
                name: "Vegemite",
                description: "Mayalı kahvaltılık sos"
            },
            {
                name: "Pavlova",
                description: "Merengli tatlı"
            }
        ],
        imageUrl: require('../assets/Gorseller/sydney.jpg')
    },
    {
        id: '27',
        name: 'Melbourne',
        caption: 'Sanat ve kafe kültürünün başkenti',
        description: "Melbourne, Avustralya'nın kültür başkenti ve yaşanabilir şehirlerinden biridir. Federation Meydanı, Royal Botanical Gardens ve Brighton Beach ile ünlüdür. Yarra Nehri kıyısında konumlanan şehir, sokak sanatı, spor etkinlikleri ve kahve kültürü ile turistleri cezbeder.",
        population: '5 milyon',
        state: 'Victoria Eyaleti, Avustralya',
        coordinate: {
            latitude: -37.8136,
            longitude: 144.9631
        },
        transportation: {
            airplane: "Melbourne Tullamarine Havalimanı",
            train: "Southern Cross İstasyonu",
            bus: "Melbourne Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Parma",
                description: "Tavuk Parmesan"
            },
            {
                name: "Lamington",
                description: "Hindistan cevizli kek"
            },
            {
                name: "Fish and Chips",
                description: "Melbourne tarzı balık ve patates"
            },
            {
                name: "Aussie BBQ",
                description: "Avustralya tarzı barbekü"
            }
        ],
        imageUrl: require('../assets/Gorseller/melbourne.jpg')
    },
    {
        id: '28',
        name: 'Vancouver',
        caption: 'Doğa ve şehir yaşamının mükemmel uyumu',
        description: "Vancouver, Kanada'nın en güzel şehirlerinden biridir. Stanley Park, Granville Island ve Grouse Mountain gibi doğal güzellikleri ile ünlüdür. Pasifik Okyanusu kıyısında konumlanan şehir, kayak merkezleri, plajları ve çok kültürlü yapısı ile turistleri cezbeder.",
        population: '2.5 milyon',
        state: 'British Columbia Eyaleti, Kanada',
        coordinate: {
            latitude: 49.2827,
            longitude: -123.1207
        },
        transportation: {
            airplane: "Vancouver Uluslararası Havalimanı",
            train: "Pacific Central Station",
            bus: "Pacific Central Otobüs Terminali"
        },
        cuisine: [
            {
                name: "Pacific Salmon",
                description: "Pasifik somonu"
            },
            {
                name: "Poutine",
                description: "Soslu ve peynirli patates kızartması"
            },
            {
                name: "Sushi",
                description: "Vancouver tarzı sushi"
            },
            {
                name: "Nanaimo Bars",
                description: "Çikolatalı tatlı bar"
            }
        ],
        imageUrl: require('../assets/Gorseller/vancouver.jpg')
    },
    {
        id: '29',
        name: 'Toronto',
        caption: 'Kuzey Amerika\'nın çok kültürlü metropolü',
        description: "Toronto, Kanada'nın en büyük şehri ve finans merkezidir. CN Kulesi, Royal Ontario Müzesi ve Casa Loma ile ünlüdür. Ontario Gölü kıyısında konumlanan şehir, çok kültürlü mahalleleri, festivalleri ve modern sanat galerileri ile turistleri cezbeder.",
        population: '6.2 milyon',
        state: 'Ontario Eyaleti, Kanada',
        coordinate: {
            latitude: 43.6532,
            longitude: -79.3832
        },
        transportation: {
            airplane: "Toronto Pearson Havalimanı",
            train: "Union Station",
            bus: "Toronto Coach Terminal"
        },
        cuisine: [
            {
                name: "Peameal Bacon",
                description: "Toronto usulü pastırma"
            },
            {
                name: "Butter Tart",
                description: "Tereyağlı tart"
            },
            {
                name: "Toronto Hot Dog",
                description: "Sokak lezzeti hot dog"
            },
            {
                name: "Kensington Market Food",
                description: "Çok kültürlü sokak lezzetleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/toronto.jpg')
    },
    {
        id: '30',
        name: 'Miami',
        caption: 'Plajlar ve Latin kültürünün cenneti',
        description: "Miami, ABD'nin en renkli şehirlerinden biridir. South Beach, Art Deco District ve Little Havana ile ünlüdür. Atlas Okyanusu kıyısında konumlanan şehir, plajları, gece hayatı ve Latin kültürü ile her yıl milyonlarca turisti ağırlar.",
        population: '2.7 milyon',
        state: 'Florida Eyaleti, Amerika Birleşik Devletleri',
        coordinate: {
            latitude: 25.7617,
            longitude: -80.1918
        },
        transportation: {
            airplane: "Miami Uluslararası Havalimanı",
            train: "Miami Central Station",
            bus: "Miami Intermodal Center"
        },
        famousPlaces: [
            {
                name: 'South Beach',
                description: 'Art Deco mimarisi ve plajlarıyla ünlü bölge'
            },
            {
                name: "Little Havana",
                description: "Küba kültürünün merkezi"
            },
            {
                name: "Vizcaya Museum",
                description: "Tarihi malikane ve bahçeler"
            },
            {
                name: "Ocean Drive",
                description: "İkonik sahil şeridi"
            }
        ],
        cuisine: [
            {
                name: "Cuban Sandwich",
                description: "Geleneksel Küba sandviçi"
            },
            {
                name: "Stone Crab",
                description: "Mevsimlik yengeç spesiyalitesi"
            },
            {
                name: "Ceviche",
                description: "Latin Amerika usulü deniz ürünleri"
            },
            {
                name: "Key Lime Pie",
                description: "Florida'nın meşhur misket limonlu tatlısı"
            }
        ],
        imageUrl: require('../assets/Gorseller/miami.jpg')
    },
    {
        id: '31',
        name: 'Las Vegas',
        caption: 'Çölün ortasındaki eğlence başkenti',
        description: "Las Vegas, ABD'nin en ünlü eğlence merkezidir. The Strip, Bellagio Fountains ve Fremont Street ile dünyaca ünlüdür. Nevada çölünde konumlanan şehir, kumarhaneleri, şovları ve lüks otelleri ile her yıl milyonlarca turisti ağırlar.",
        population: '2.2 milyon',
        state: 'Nevada Eyaleti, Amerika Birleşik Devletleri',
        coordinate: {
            latitude: 36.1699,
            longitude: -115.1398
        },
        transportation: {
            airplane: "McCarran Uluslararası Havalimanı",
            train: "Las Vegas Terminal",
            bus: "RTC Transit Center"
        },
        famousPlaces: [
            {
                name: 'The Strip',
                description: 'Dünyaca ünlü kumarhane ve oteller bulvarı'
            },
            {
                name: "Bellagio Fountains",
                description: "Müzikli su gösterisi"
            },
            {
                name: "Fremont Street",
                description: "Tarihi Las Vegas bölgesi"
            },
            {
                name: "High Roller",
                description: "Dünyanın en yüksek dönme dolaplarından biri"
            }
        ],
        cuisine: [
            {
                name: "Buffet",
                description: "Las Vegas'ın ünlü lüks açık büfeleri"
            },
            {
                name: "Prime Rib",
                description: "Klasik Amerikan bifteği"
            },
            {
                name: "Shrimp Cocktail",
                description: "Golden Gate'in meşhur karides kokteyli"
            },
            {
                name: "Celebrity Chef Restaurants",
                description: "Dünyaca ünlü şeflerin restoranları"
            }
        ],
        imageUrl: require('../assets/Gorseller/lasvegas.jpg')
    },
    {
        id: '32',
        name: 'Los Angeles',
        caption: 'Hollywood\'un yıldızlar şehri',
        description: "Los Angeles, ABD'nin sinema ve eğlence başkentidir. Hollywood, Beverly Hills ve Santa Monica Plajı ile ünlüdür. Pasifik Okyanusu kıyısında konumlanan şehir, film stüdyoları, tema parkları ve sanat müzeleri ile turistleri cezbeder.",
        population: '4 milyon',
        state: 'California Eyaleti, Amerika Birleşik Devletleri',
        coordinate: {
            latitude: 34.0522,
            longitude: -118.2437
        },
        transportation: {
            airplane: "Los Angeles Uluslararası Havalimanı",
            train: "Union Station",
            bus: "Los Angeles Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Hollywood Walk of Fame',
                description: 'Ünlülerin yıldızlı kaldırımı'
            },
            {
                name: "Universal Studios",
                description: "Film stüdyosu ve tema park"
            },
            {
                name: "Santa Monica Pier",
                description: "İkonik sahil lunaparkı"
            },
            {
                name: "Griffith Observatory",
                description: "Şehir manzaralı gözlemevi"
            }
        ],
        cuisine: [
            {
                name: "In-N-Out Burger",
                description: "Kaliforniya'nın meşhur hamburgeri"
            },
            {
                name: "Korean BBQ",
                description: "Koreatown'ın ünlü barbeküleri"
            },
            {
                name: "Fish Tacos",
                description: "Sokak lezzeti Meksika tacoları"
            },
            {
                name: "California Roll",
                description: "LA'de doğan sushi türü"
            }
        ],
        imageUrl: require('../assets/Gorseller/losangeles.jpg')
    },
    {
        id: '33',
        name: 'Chicago',
        caption: 'Gökdelenlerin ve caz müziğinin şehri',
        description: "Chicago, ABD'nin en önemli kültür ve ticaret merkezlerinden biridir. Willis Tower, Millennium Park ve Navy Pier ile ünlüdür. Michigan Gölü kıyısında konumlanan şehir, mimari turları, blues kulüpleri ve derin tabanlı pizzası ile turistleri cezbeder.",
        population: '2.7 milyon',
        state: 'Illinois Eyaleti, Amerika Birleşik Devletleri',
        coordinate: {
            latitude: 41.8781,
            longitude: -87.6298
        },
        transportation: {
            airplane: "O'Hare Uluslararası Havalimanı",
            train: "Union Station",
            bus: "Greyhound Terminal"
        },
        famousPlaces: [
            {
                name: 'Willis Tower',
                description: 'Şehrin en yüksek gökdeleni'
            },
            {
                name: "Millennium Park",
                description: "Cloud Gate (The Bean) heykeli ile ünlü park"
            },
            {
                name: "Navy Pier",
                description: "Eğlence ve alışveriş merkezi"
            },
            {
                name: "Art Institute of Chicago",
                description: "Dünyaca ünlü sanat müzesi"
            }
        ],
        cuisine: [
            {
                name: "Deep Dish Pizza",
                description: "Chicago usulü derin tava pizzası"
            },
            {
                name: "Chicago Hot Dog",
                description: "Geleneksel Chicago sosisli sandviçi"
            },
            {
                name: "Italian Beef",
                description: "Sulu et sandviçi"
            },
            {
                name: "Garrett Popcorn",
                description: "Meşhur Chicago patlamış mısırı"
            }
        ],
        imageUrl: require('../assets/Gorseller/chicago.jpg')
    },
    {
        id: '34',
        name: 'Berlin',
        caption: 'Tarih ve modern sanatın başkenti',
        description: "Berlin, Almanya'nın başkenti ve kültür merkezidir. Brandenburg Kapısı, East Side Gallery ve Müzeler Adası ile ünlüdür. Spree Nehri kıyısında konumlanan şehir, tarih müzeleri, alternatif sanat sahnesi ve gece hayatı ile her yıl milyonlarca turisti ağırlar.",
        population: '3.7 milyon',
        state: 'Berlin Eyaleti, Almanya',
        coordinate: {
            latitude: 52.5200,
            longitude: 13.4050
        },
        transportation: {
            airplane: "Berlin Brandenburg Havalimanı",
            train: "Berlin Hauptbahnhof",
            bus: "ZOB Berlin"
        },
        famousPlaces: [
            {
                name: 'Brandenburg Kapısı',
                description: "Berlin'in sembolik anıtı"
            },
            {
                name: "East Side Gallery",
                description: "Berlin Duvarı'nın en uzun kalıntısı"
            },
            {
                name: "Reichstag Binası",
                description: "Alman Parlamentosu"
            },
            {
                name: "Müzeler Adası",
                description: "UNESCO Dünya Mirası müze kompleksi"
            }
        ],
        cuisine: [
            {
                name: "Currywurst",
                description: "Berlin'in meşhur köri soslu sosisi"
            },
            {
                name: "Döner Kebab",
                description: "Berlin tarzı döner"
            },
            {
                name: "Berliner Pfannkuchen",
                description: "Geleneksel Berlin çöreği"
            },
            {
                name: "Eisbein",
                description: "Haşlanmış domuz paçası"
            }
        ],
        imageUrl: require('../assets/Gorseller/berlin.jpg')
    },
    {
        id: '35',
        name: 'Hamburg',
        caption: 'Almanya\'nın deniz kapısı ve liman şehri',
        description: "Hamburg, Almanya'nın en büyük liman şehridir. Speicherstadt, Elbphilharmonie ve Reeperbahn ile ünlüdür. Elbe Nehri kıyısında konumlanan şehir, tarihi depoları, müzik salonları ve deniz ürünleri restoranları ile turistleri cezbeder.",
        population: '1.8 milyon',
        state: 'Hamburg Eyaleti, Almanya',
        coordinate: {
            latitude: 53.5511,
            longitude: 9.9937
        },
        transportation: {
            airplane: "Hamburg Havalimanı",
            train: "Hamburg Hauptbahnhof",
            bus: "Hamburg ZOB"
        },
        famousPlaces: [
            {
                name: 'Speicherstadt',
                description: 'Tarihi depo bölgesi'
            },
            {
                name: "Elbphilharmonie",
                description: "Modern konser salonu"
            },
            {
                name: "Miniatur Wunderland",
                description: "Dünyanın en büyük minyatür demiryolu"
            },
            {
                name: "St. Michael Kilisesi",
                description: "Hamburg'un simgesi olan kilise"
            }
        ],
        cuisine: [
            {
                name: "Fischbrötchen",
                description: "Balık sandviçi"
            },
            {
                name: "Hamburger Aalsuppe",
                description: "Geleneksel yılan balığı çorbası"
            },
            {
                name: "Labskaus",
                description: "Denizcilerin geleneksel yemeği"
            },
            {
                name: "Rote Grütze",
                description: "Kırmızı meyve tatlısı"
            }
        ],
        imageUrl: require('../assets/Gorseller/hamburg.jpg')
    },
    {
        id: '36',
        name: 'Münih',
        caption: 'Bavyera\'nın geleneksel ve modern başkenti',
        description: "Münih, Almanya'nın en zengin şehirlerinden biridir. Marienplatz, Nymphenburg Sarayı ve Oktoberfest ile dünyaca ünlüdür. Isar Nehri kıyısında konumlanan şehir, bira bahçeleri, müzeler ve teknoloji merkezleri ile her yıl milyonlarca turisti ağırlar.",
        population: '1.5 milyon',
        state: 'Bavyera Eyaleti, Almanya',
        coordinate: {
            latitude: 48.1351,
            longitude: 11.5820
        },
        transportation: {
            airplane: "Münih Franz Josef Strauss Havalimanı",
            train: "München Hauptbahnhof",
            bus: "München ZOB"
        },
        famousPlaces: [
            {
                name: 'Marienplatz',
                description: 'Tarihi şehir merkezi meydanı'
            },
            {
                name: "Nymphenburg Sarayı",
                description: "Barok tarzı kraliyet sarayı"
            },
            {
                name: "English Garden",
                description: "Şehrin en büyük parkı"
            },
            {
                name: "BMW Müzesi",
                description: "Otomotiv tarihinin sergilendiği müze"
            }
        ],
        cuisine: [
            {
                name: "Weisswurst",
                description: "Beyaz Bavyera sosisi"
            },
            {
                name: "Schweinshaxe",
                description: "Fırınlanmış domuz paçası"
            },
            {
                name: "Leberkäse",
                description: "Bavyera usulü et köftesi"
            },
            {
                name: "Apfelstrudel",
                description: "Elmalı çörek"
            }
        ],
        imageUrl: require('../assets/Gorseller/munih.jpg')
    },
    {
        id: '37',
        name: 'Milano',
        caption: 'Moda ve tasarımın İtalyan başkenti',
        description: "Milano, İtalya'nın moda ve finans merkezidir. Duomo Katedrali, Galleria Vittorio Emanuele II ve La Scala Operası ile ünlüdür. Po Vadisi'nde konumlanan şehir, moda butikleri, tasarım fuarları ve zengin mutfağı ile her yıl milyonlarca turisti ağırlar.",
        population: '1.4 milyon',
        state: 'Lombardiya Bölgesi, İtalya',
        coordinate: {
            latitude: 45.4642,
            longitude: 9.1900
        },
        transportation: {
            airplane: "Milano Malpensa Havalimanı",
            train: "Milano Centrale",
            bus: "Lampugnano Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Duomo di Milano',
                description: 'Gotik katedral'
            },
            {
                name: "Galleria Vittorio Emanuele II",
                description: "İtalya'nın en eski alışveriş merkezi"
            },
            {
                name: "Teatro alla Scala",
                description: "Dünyaca ünlü opera binası"
            },
            {
                name: "Castello Sforzesco",
                description: "15. yüzyıl kalesi"
            }
        ],
        cuisine: [
            {
                name: "Risotto alla Milanese",
                description: "Safran soslu risotto"
            },
            {
                name: "Cotoletta alla Milanese",
                description: "Milano usulü şnitzel"
            },
            {
                name: "Panettone",
                description: "Geleneksel Noel tatlısı"
            },
            {
                name: "Osso Buco",
                description: "Dana paça yahnisi"
            }
        ],
        imageUrl: require('../assets/Gorseller/milano.jpg')
    },
    {
        id: '38',
        name: 'Floransa',
        caption: 'Rönesans\'ın doğduğu sanat şehri',
        description: "Floransa, İtalya'nın en önemli sanat merkezlerinden biridir. Uffizi Galerisi, Duomo Katedrali ve Ponte Vecchio ile ünlüdür. Arno Nehri kıyısında konumlanan şehir, Rönesans sanatı, tarihi meydanları ve Toskana mutfağı ile turistleri cezbeder.",
        population: '382 bin',
        state: 'Toskana Bölgesi, İtalya',
        coordinate: {
            latitude: 43.7696,
            longitude: 11.2558
        },
        transportation: {
            airplane: "Floransa Amerigo Vespucci Havalimanı",
            train: "Santa Maria Novella İstasyonu",
            bus: "Villa Costanza Terminali"
        },
        famousPlaces: [
            {
                name: 'Uffizi Galerisi',
                description: 'Rönesans sanatının merkezi'
            },
            {
                name: "Duomo",
                description: "Santa Maria del Fiore Katedrali"
            },
            {
                name: "Ponte Vecchio",
                description: "Tarihi köprü"
            },
            {
                name: "Palazzo Vecchio",
                description: "Tarihi belediye sarayı"
            }
        ],
        cuisine: [
            {
                name: "Bistecca alla Fiorentina",
                description: "Floransa usulü T-bone steak"
            },
            {
                name: "Ribollita",
                description: "Geleneksel sebze çorbası"
            },
            {
                name: "Crostini",
                description: "Toskana usulü kanepeler"
            },
            {
                name: "Gelato",
                description: "İtalyan dondurması"
            }
        ],
        imageUrl: require('../assets/Gorseller/florance.jpg')
    },
    {
        id: '39',
        name: 'Atina',
        caption: 'Antik medeniyetin beşiği',
        description: "Atina, Yunanistan'ın başkenti ve antik dünyanın merkezidir. Akropolis, Parthenon ve Plaka Mahallesi ile ünlüdür. Ege Denizi yakınında konumlanan şehir, antik kalıntıları, taverna kültürü ve Yunan mutfağı ile her yıl milyonlarca turisti ağırlar.",
        population: '3.1 milyon',
        state: 'Attica Bölgesi, Yunanistan',
        coordinate: {
            latitude: 37.9838,
            longitude: 23.7275
        },
        transportation: {
            airplane: "Atina Uluslararası Havalimanı",
            train: "Larissa İstasyonu",
            bus: "Kifissos Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Akropolis',
                description: 'Antik Yunan medeniyetinin simgesi'
            },
            {
                name: "Parthenon",
                description: "Athena Tapınağı"
            },
            {
                name: "Plaka",
                description: "Tarihi mahalle"
            },
            {
                name: "Syntagma Meydanı",
                description: "Şehrin merkezi meydanı"
            }
        ],
        cuisine: [
            {
                name: "Moussaka",
                description: "Patlıcanlı geleneksel yemek"
            },
            {
                name: "Souvlaki",
                description: "Şiş kebap"
            },
            {
                name: "Tzatziki",
                description: "Yoğurtlu salatalık mezesi"
            },
            {
                name: "Baklava",
                description: "Yunan tarzı baklava"
            }
        ],
        imageUrl: require('../assets/Gorseller/atina.jpg')
    },
    {
        id: '40',
        name: 'Lizbon',
        caption: 'Yedi tepe üzerinde Atlantik\'in incisi',
        description: "Lizbon, Portekiz'in başkenti ve en büyük şehridir. Belém Kulesi, São Jorge Kalesi ve tarihi tramvayları ile ünlüdür. Tejo Nehri kıyısında konumlanan şehir, fado müziği, pastaneleri ve renkli sokakları ile turistleri cezbeder.",
        population: '2.9 milyon',
        state: 'Lizbon Bölgesi, Portekiz',
        coordinate: {
            latitude: 38.7223,
            longitude: -9.1393
        },
        transportation: {
            airplane: "Lizbon Portela Havalimanı",
            train: "Santa Apolónia İstasyonu",
            bus: "Sete Rios Terminal"
        },
        famousPlaces: [
            {
                name: 'Belém Kulesi',
                description: 'UNESCO Dünya Mirası listesindeki kule'
            },
            {
                name: "São Jorge Kalesi",
                description: "Tarihi kale ve şehir manzarası"
            },
            {
                name: "Jerónimos Manastırı",
                description: "Manuelin tarzı mimari şaheser"
            },
            {
                name: "Alfama",
                description: "En eski mahalle"
            }
        ],
        cuisine: [
            {
                name: "Bacalhau",
                description: "Morina balığı yemekleri"
            },
            {
                name: "Pastéis de Nata",
                description: "Portekiz kremalı tatlısı"
            },
            {
                name: "Caldo Verde",
                description: "Geleneksel yeşil çorba"
            },
            {
                name: "Sardinhas Assadas",
                description: "Izgara sardalye"
            }
        ],
        imageUrl: require('../assets/Gorseller/lizbon.jpg')
    },
    {
        id: '41',
        name: 'Stockholm',
        caption: 'İskandinavya\'nın zarif başkenti',
        description: "Stockholm, İsveç'in başkenti ve en büyük şehridir. Gamla Stan, Vasa Müzesi ve Kraliyet Sarayı ile ünlüdür. Baltık Denizi'ndeki adalar üzerine kurulu şehir, modern tasarımı, müzeleri ve kafeteryaları ile turistleri cezbeder.",
        population: '2.4 milyon',
        state: 'Stockholm İli, İsveç',
        coordinate: {
            latitude: 59.3293,
            longitude: 18.0686
        },
        transportation: {
            airplane: "Stockholm Arlanda Havalimanı",
            train: "Stockholm Central Station",
            bus: "Cityterminalen"
        },
        famousPlaces: [
            {
                name: 'Gamla Stan',
                description: 'Tarihi şehir merkezi'
            },
            {
                name: "Vasa Müzesi",
                description: "17. yüzyıl savaş gemisi müzesi"
            },
            {
                name: "Kraliyet Sarayı",
                description: "İsveç Kraliyet ailesinin resmi konutu"
            },
            {
                name: "ABBA Müzesi",
                description: "Efsanevi müzik grubunun müzesi"
            }
        ],
        cuisine: [
            {
                name: "Köttbullar",
                description: "İsveç köftesi"
            },
            {
                name: "Gravlax",
                description: "Tuzlanmış somon"
            },
            {
                name: "Kanelbullar",
                description: "Tarçınlı çörek"
            },
            {
                name: "Smörgåstårta",
                description: "Sandviç pastası"
            }
        ],
        imageUrl: require('../assets/Gorseller/stockholm.jpg')
    },
    {
        id: '42',
        name: 'Kopenhag',
        caption: 'Bisikletler ve modern tasarımın şehri',
        description: "Kopenhag, Danimarka'nın başkenti ve kültür merkezidir. Tivoli Bahçeleri, Küçük Deniz Kızı heykeli ve Nyhavn ile ünlüdür. Øresund Boğazı kıyısında konumlanan şehir, bisiklet kültürü, modern mimarisi ve yeni İskandinav mutfağı ile her yıl milyonlarca turisti ağırlar.",
        population: '1.3 milyon',
        state: 'Hovedstaden Bölgesi, Danimarka',
        coordinate: {
            latitude: 55.6761,
            longitude: 12.5683
        },
        transportation: {
            airplane: "Kopenhag Kastrup Havalimanı",
            train: "København H",
            bus: "Ingerslevsgade Terminal"
        },
        famousPlaces: [
            {
                name: 'Tivoli Bahçeleri',
                description: 'UNESCO Dünya Mirası listesindeki bahçe'
            },
            {
                name: "Küçük Deniz Kızı",
                description: "Tivoli Bahçeleri'nde bulunan heykel"
            },
            {
                name: "Nyhavn",
                description: "Renkli yapılar ve kıyı kulübü"
            },
            {
                name: "Christiansborg",
                description: "Danimarka'nın parlamentosu"
            }
        ],
        cuisine: [
            {
                name: "Smørrebrød",
                description: "Danimarka'nın en popüler yemekleri"
            }
        ],  
        imageUrl: require('../assets/Gorseller/kopenhag.jpg')
    },
    {
        id: '43',
        name: 'Oslo',
        caption: 'Fiyortların modern başkenti',
        description: "Oslo, Norveç'in başkenti ve en büyük şehridir. Opera Binası, Vigeland Parkı ve Viking Gemi Müzesi ile ünlüdür. Oslo Fiyordu kıyısında konumlanan şehir, modern sanat müzeleri, kayak merkezleri ve doğa yürüyüşleri ile turistleri cezbeder.",
        population: '1 milyon',
        state: 'Oslo İli, Norveç',
        coordinate: {
            latitude: 59.9139,
            longitude: 10.7522
        },
        transportation: {
            airplane: "Oslo Gardermoen Havalimanı",
            train: "Oslo Central Station",
            bus: "Oslo Bussterminal"
        },
        famousPlaces: [
            {
                name: 'Opera Binası',
                description: 'Norveç'
            },
            {
                name: "Viking Gemi Müzesi",
                description: "Viking gemileri ve tarihi"
            },
            {
                name: "Vigeland Parkı",
                description: "Tarihi park"
            },
            {
                name: "Oslo Kalesi",
                description: "Oslo'nun simgesi"
            },
        ],
        cuisine: [
            {
                name: "Smørrebrød",
                description: "Danimarka'nın en popüler yemekleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/oslo.jpg')
    },
    {
        id: '44',
        name: 'Helsinki',
        caption: 'Baltık\'ın tasarım başkenti',
        description: "Helsinki, Finlandiya'nın başkenti ve en büyük şehridir. Senato Meydanı, Temppeliaukio Kilisesi ve Suomenlinna Kalesi ile ünlüdür. Finlandiya Körfezi kıyısında konumlanan şehir, sauna kültürü, tasarım mağazaları ve modern mimarisi ile turistleri cezbeder.",
        population: '1.3 milyon',
        state: 'Uusimaa Bölgesi, Finlandiya',
        coordinate: {
            latitude: 60.1699,
            longitude: 24.9384
        },
        transportation: {
            airplane: "Helsinki-Vantaa Havalimanı",
            train: "Helsinki Central Station",
            bus: "Kamppi Terminal"
        },
        famousPlaces: [
            {
                name: 'Senato Meydanı',
                description: 'Finlandiya'
            },
            {
                name: "Temppeliaukio Kilisesi",
                description: "Tasarlanan kilise"
            },
            {
                name: "Suomenlinna Kalesi",
                description: "Tarihi kale"
            },
            {
                name: "Kamppi",
                description: "Küçük deniz kızı"
            }
        ],
        cuisine: [
            {
                name: "Smørrebrød",
                description: "Danimarka'nın en popüler yemekleri"
            },
            {
                name: "Korv",
                description: "Finlandiya'nın en popüler yemekleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/helsinki.jpg')
    },
    {
        id: '45',
        name: 'Varşova',
        caption: 'Yeniden doğan Polonya başkenti',
        description: "Varşova, Polonya'nın başkenti ve en büyük şehridir. Eski Şehir Meydanı, Kraliyet Sarayı ve Wilanów Sarayı ile ünlüdür. Vistül Nehri kıyısında konumlanan şehir, II. Dünya Savaşı sonrası yeniden inşa edilen mimarisi, müzeleri ve Chopin konserleri ile turistleri cezbeder.",
        population: '1.8 milyon',
        state: 'Mazowieckie Voyvodalığı, Polonya',
        coordinate: {
            latitude: 52.2297,
            longitude: 21.0122
        },
        transportation: {
            airplane: "Varşova Chopin Havalimanı",
            train: "Warszawa Centralna",
            bus: "Warszawa Zachodnia"
        },
        famousPlaces: [
            {
                name: 'Eski Şehir Meydanı',
                description: 'Polonya'
            },
            {
                name: "Kraliyet Sarayı",
                description: "Polonya'nın kraliyet sarayı"
            },
            {
                name: "Wilanów Sarayı",
                description: "Polonya'nın kraliyet sarayı"
            },
            {
                name: "Kamppi",
                description: "Küçük deniz kızı"
            }
        ],
        cuisine: [
            {
                name: "Smørrebrød",
                description: "Danimarka'nın en popüler yemekleri"
            }
        ], 
        imageUrl: require('../assets/Gorseller/warsaw.jpg')
    }, 
    {
        id: '46',
        name: 'Bükreş',
        caption: 'Küçük Paris olarak anılan Romanya başkenti',
        description: "Bükreş, Romanya'nın başkenti ve en büyük şehridir. Parlamento Sarayı, Ateneul Român ve Stavropoleos Manastırı ile ünlüdür. Dâmbovița Nehri kıyısında konumlanan şehir, Art Nouveau mimarisi, parkları ve geleneksel restoranları ile her yıl binlerce turisti ağırlar.",
        population: '2.1 milyon',
        state: 'Ilfov Bölgesi, Romanya',
        coordinate: {
            latitude: 44.4268,
            longitude: 26.1025
        },
        transportation: {
            airplane: "Henri Coandă Havalimanı",
            train: "Gara de Nord",
            bus: "Autogara Filaret"
        },
        famousPlaces: [
            {
                name: 'Parlamento Sarayı',
                description: 'Romanya'
            },
            {
                name: "Ateneul Român",
                description: "Romanya'nın en eski okulü"
            },
            {
                name: "Stavropoleos Manastırı",
                description: "Tarihi manastır"
            },
            {
                name: "Kamppi",
                description: "Küçük deniz kızı"
            }
        ],
        cuisine: [
            {
                name: "Smørrebrød",
                description: "Danimarka'nın en popüler yemekleri"
            },
            {
                name: "Korv",
                description: "Finlandiya'nın en popüler yemekleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/bukres.jpg')
    },
    {
        id: '47',
        name: 'Kyoto',
        caption: 'Japonya\'nın geleneksel kültür başkenti',
        description: "Kyoto, Japonya'nın eski başkenti ve kültürel hazinesidir. Kinkaku-ji Tapınağı, Fushimi Inari Tapınağı ve Gion bölgesi ile ünlüdür. Kamo Nehri kıyısında konumlanan şehir, Zen bahçeleri, geisha kültürü ve çay seremonileri ile her yıl milyonlarca turisti ağırlar.",
        population: '1.5 milyon',
        state: 'Kyoto Prefektörlüğü, Japonya',
        coordinate: {
            latitude: 35.0116,
            longitude: 135.7681
        },
        transportation: {
            airplane: "Kansai Uluslararası Havalimanı",
            train: "Kyoto Station",
            bus: "Kyoto Bus Terminal"
        }
    },
    {
        id: '48',
        name: 'Osaka',
        caption: 'Japonya\'nın mutfak ve eğlence merkezi',
        description: "Osaka, Japonya'nın ikinci büyük metropolüdür. Osaka Kalesi, Dōtonbori ve Kuromon Pazarı ile ünlüdür. Osaka Körfezi kıyısında konumlanan şehir, sokak yemekleri, gece hayatı ve modern alışveriş merkezleri ile turistleri cezbeder.",
        population: '2.7 milyon',
        state: 'Osaka Prefektörlüğü, Japonya',
        coordinate: {
            latitude: 34.6937,
            longitude: 135.5023
        },
        transportation: {
            airplane: "Kansai Uluslararası Havalimanı",
            train: "Osaka Station",
            bus: "Osaka City Air Terminal"
        },
        famousPlaces: [
            {
                name: 'Osaka Kalesi',
                description: "Japonya'nın en önemli kalelerinden"
            },
            {
                name: "Dōtonbori",
                description: "Ünlü eğlence ve yemek bölgesi"
            },
            {
                name: "Universal Studios Japan",
                description: "Popüler tema park"
            },
            {
                name: "Kuromon Ichiba Pazarı",
                description: "Geleneksel yemek pazarı"
            }
        ],
        cuisine: [
            {
                name: "Takoyaki",
                description: "Ahtapotlu hamur topları"
            },
            {
                name: "Okonomiyaki",
                description: "Osaka usulü krep"
            },
            {
                name: "Kushikatsu",
                description: "Kızartılmış şiş yemekleri"
            },
            {
                name: "Kitsune Udon",
                description: "Tatlı soyalı udon"
            }
        ],
        imageUrl: require('../assets/Gorseller/osaka.jpg')
    },
    {
        id: '49',
        name: 'İzmir',
        caption: 'Ege\'nin incisi, güzel İzmir',
        description: "İzmir, Türkiye'nin üçüncü büyük şehri ve önemli bir liman kentidir. Saat Kulesi, Kemeraltı Çarşısı ve Kordon Boyu ile ünlüdür. Ege Denizi kıyısında konumlanan şehir, antik kentleri, plajları ve zengin mutfağı ile her yıl milyonlarca turisti ağırlar. Şehrin modern yaşam tarzı, rüzgar sörfü merkezleri ve üzüm bağları ile benzersiz bir Ege deneyimi sunar.",
        population: '4.4 milyon',
        state: 'İzmir İli, Türkiye',
        coordinate: {
            latitude: 38.4237,
            longitude: 27.1428
        },
        transportation: {
            airplane: "İzmir Adnan Menderes Havalimanı",
            train: "Alsancak Garı",
            bus: "İzmir Otogarı"
        },
        famousPlaces: [
            {
                name: 'Saat Kulesi',
                description: 'Konak Meydanı\'nın simgesi'
            },
            {
                name: "Kemeraltı Çarşısı",
                description: "Tarihi çarşı bölgesi"
            },
            {
                name: "Kordon",
                description: "Sahil şeridi ve yürüyüş alanı"
            },
            {
                name: "Efes Antik Kenti",
                description: "UNESCO Dünya Mirası antik şehir"
            }
        ],
        cuisine: [
            {
                name: "Boyoz",
                description: "İzmir'e özgü hamur işi"
            },
            {
                name: "Kumru",
                description: "İzmir usulü sandviç"
            },
            {
                name: "İzmir Köfte",
                description: "Patatesli köfte yemeği"
            },
            {
                name: "Şambali",
                description: "Geleneksel tatlı"
            }
        ],
        imageUrl: require('../assets/Gorseller/izmir.jpg')
    },
    {
        id: '50',
        name: 'Ankara',
        caption: 'Türkiye Cumhuriyeti\'nin başkenti',
        description: "Ankara, Türkiye'nin başkenti ve ikinci büyük şehridir. Anıtkabir, Ankara Kalesi ve TBMM binası ile ünlüdür. İç Anadolu'nun kalbinde konumlanan şehir, müzeleri, üniversiteleri ve devlet kurumları ile önemli bir kültür ve siyaset merkezidir. Şehrin modern mimarisi, parkları ve geleneksel Ankara mutfağı ile özgün bir Anadolu deneyimi sunar.",
        population: '5.6 milyon',
        state: 'Ankara İli, Türkiye',
        coordinate: {
            latitude: 39.9334,
            longitude: 32.8597
        },
        transportation: {
            airplane: "Ankara Esenboğa Havalimanı",
            train: "Ankara Garı",
            bus: "AŞTİ Terminal"
        },
        famousPlaces: [
            {
                name: 'Anıtkabir',
                description: 'Atatürk\'ün mozolesi'
            },
            {
                name: "Ankara Kalesi",
                description: "Tarihi kale ve panoramik manzara"
            },
            {
                name: "Kocatepe Camii",
                description: "Modern mimari örneği cami"
            },
            {
                name: "Anadolu Medeniyetleri Müzesi",
                description: "Tarihi eserler müzesi"
            }
        ],
        cuisine: [
            {
                name: "Ankara Tava",
                description: "Geleneksel et yemeği"
            },
            {
                name: "Kızılcahamam Mantısı",
                description: "Yöresel mantı"
            },
            {
                name: "Beypazarı Kurusu",
                description: "Geleneksel kurabiye"
            },
            {
                name: "Çubuk Turşusu",
                description: "Meşhur turşu çeşitleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/ankara.jpg')
    },
    {
        id: '51',
        name: 'Mersin',
        caption: 'Akdeniz\'in modern liman kenti',
        description: "Mersin, Türkiye'nin önemli liman kentlerinden biridir. Kızkalesi, Cennet-Cehennem Obrukları ve Tarsus Antik Kenti ile ünlüdür. Akdeniz kıyısında konumlanan şehir, narenciye bahçeleri, plajları ve deniz ürünleri ile turistleri cezbeder. Şehrin modern limanı, palmiye ağaçlı sahil şeridi ve tantuni gibi yerel lezzetleri ile özgün bir Akdeniz deneyimi sunar.",
        population: '1.9 milyon',
        state: 'Mersin İli, Türkiye',
        coordinate: {
            latitude: 36.8121,
            longitude: 34.6339
        },
        transportation: {
            airplane: "Mersin-Adana Havalimanı",
            train: "Mersin Garı",
            bus: "Mersin Otogarı"
        },
        famousPlaces: [
            {
                name: 'Kızkalesi',
                description: 'Deniz ortasındaki tarihi kale'
            },
            {
                name: "Cennet ve Cehennem Obrukları",
                description: "Doğal oluşumlu derin çukurlar"
            },
            {
                name: "Tarsus Antik Kenti",
                description: "St. Paul'un doğduğu tarihi şehir"
            },
            {
                name: "Mersin Marina",
                description: "Modern yat limanı"
            }
        ],
        cuisine: [
            {
                name: "Tantuni",
                description: "Mersin'in meşhur et dürümü"
            },
            {
                name: "Cezerye",
                description: "Havuç tatlısı"
            },
            {
                name: "Kerebiç",
                description: "Geleneksel tatlı"
            },
            {
                name: "Şalgam",
                description: "Geleneksel içecek"
            }
        ],
        imageUrl: require('../assets/Gorseller/mersin.jpg')
    },
    {
        id: '52',
        name: 'Muğla',
        caption: 'Türk Rivierası\'nın tatil cenneti',
        description: "Muğla, Türkiye'nin en önemli turizm merkezlerinden biridir. Bodrum, Marmaris, Fethiye gibi dünyaca ünlü tatil beldeleri ile tanınır. Ege ve Akdeniz kıyılarında konumlanan şehir, antik kentleri, koyları ve yat turizmi ile her yıl milyonlarca turisti ağırlar. Bölgenin doğal güzellikleri, mavi yolculuk rotaları ve yerel mutfağı ile eşsiz bir tatil deneyimi sunar.",
        population: '1 milyon',
        state: 'Muğla İli, Türkiye',
        coordinate: {
            latitude: 37.2154,
            longitude: 28.3636
        },
        transportation: {
            airplane: "Dalaman Havalimanı",
            train: "En yakın tren istasyonu İzmir'de",
            bus: "Muğla Otogarı"
        },
        famousPlaces: [
            {
                name: 'Ölüdeniz',
                description: 'Dünyaca ünlü lagün ve plaj'
            },
            {
                name: "Bodrum Kalesi",
                description: "Tarihi deniz kalesi"
            },
            {
                name: "Dalyan Kaya Mezarları",
                description: "Antik Likya kaya mezarları"
            },
            {
                name: "Marmaris Marina",
                description: "Uluslararası yat limanı"
            }
        ],
        cuisine: [
            {
                name: "Çökertme Kebabı",
                description: "Bodrum'un meşhur et yemeği"
            },
            {
                name: "Börek",
                description: "Muğla usulü börek"
            },
            {
                name: "Keşkek",
                description: "Geleneksel buğday yemeği"
            },
            {
                name: "Deniz Mahsulleri",
                description: "Taze deniz ürünleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/mugla.jpg')
    },
    {
        id: '53',
        name: 'Kahire',
        caption: 'Piramitlerin gölgesindeki antik başkent',
        description: "Kahire, Mısır'ın başkenti ve en büyük Arap şehridir. Gize Piramitleri, Mısır Müzesi ve El-Ezher Camii ile ünlüdür. Nil Nehri kıyısında konumlanan şehir, antik Mısır hazineleri, geleneksel çarşıları ve İslam mimarisi ile her yıl milyonlarca turisti ağırlar. Şehrin tarihi atmosferi, Khan el-Khalili pazarı ve Mısır mutfağı ile benzersiz bir Orta Doğu deneyimi sunar.",
        population: '20.9 milyon',
        state: 'Kahire Valiliği, Mısır',
        coordinate: {
            latitude: 30.0444,
            longitude: 31.2357
        },
        transportation: {
            airplane: "Kahire Uluslararası Havalimanı",
            train: "Ramses İstasyonu",
            bus: "Kahire Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Gize Piramitleri',
                description: 'Antik dünyanın yedi harikasından biri'
            },
            {
                name: "Mısır Müzesi",
                description: "Antik Mısır hazineleri"
            },
            {
                name: "El-Ezher Camii",
                description: "İslam dünyasının en eski üniversitesi"
            },
            {
                name: "Khan el-Khalili",
                description: "Tarihi çarşı"
            }
        ],
        cuisine: [
            {
                name: "Koshari",
                description: "Mısır'ın ulusal yemeği"
            },
            {
                name: "Ful Medames",
                description: "Geleneksel bakla yemeği"
            },
            {
                name: "Molokhia",
                description: "Yapraklı sebze çorbası"
            },
            {
                name: "Um Ali",
                description: "Geleneksel Mısır tatlısı"
            }
        ],
        imageUrl: require('../assets/Gorseller/kahire.jpg')
    },
    {
        id: '54',
        name: 'Dublin',
        caption: 'Edebiyat ve Guinness\'in yeşil başkenti',
        description: "Dublin, İrlanda'nın başkenti ve en büyük şehridir. Trinity College, Dublin Kalesi ve Guinness Storehouse ile ünlüdür. Liffey Nehri kıyısında konumlanan şehir, tarihi pubları, edebi mirası ve İrlanda müziği ile turistleri cezbeder. Şehrin Georgian mimarisi, parkları ve canlı kültür sahnesi ile otantik bir İrlanda deneyimi sunar.",
        population: '1.4 milyon',
        state: 'Leinster Eyaleti, İrlanda',
        coordinate: {
            latitude: 53.3498,
            longitude: -6.2603
        },
        transportation: {
            airplane: "Dublin Havalimanı",
            train: "Dublin Connolly Station",
            bus: "Busáras Central Station"
        },
        imageUrl: require('../assets/Gorseller/Dublin Ireland.jpeg')
    },
    {
        id: '55',
        name: 'Sao Paulo',
        caption: 'Güney Amerika\'nın finans ve kültür merkezi',
        description: "Sao Paulo, Brezilya'nın en büyük şehri ve ekonomik merkezidir. Paulista Caddesi, MASP Müzesi ve Ibirapuera Parkı ile ünlüdür. Yüksek platoda konumlanan şehir, modern sanat galerileri, gurme restoranları ve gece hayatı ile her yıl milyonlarca ziyaretçi çeker. Şehrin çok kültürlü yapısı, sokak sanatı ve Brezilya mutfağı ile benzersiz bir Latin Amerika deneyimi sunar.",
        population: '12.3 milyon',
        state: 'Sao Paulo Eyaleti, Brezilya',
        coordinate: {
            latitude: -23.5505,
            longitude: -46.6333
        },
        transportation: {
            airplane: "Guarulhos Uluslararası Havalimanı",
            train: "Luz İstasyonu",
            bus: "Tietê Otobüs Terminali"
        },
        imageUrl: require('../assets/Gorseller/saopaulo.jpg')
    },
    {
        id: '56',
        name: 'Astana',
        caption: 'Bozkırın ortasındaki fütüristik başkent',
        description: "Astana (Nur-Sultan), Kazakistan'ın başkenti ve en modern şehridir. Bayterek Kulesi, Han Çadırı ve Barış Piramidi ile ünlüdür. Bozkırın ortasında konumlanan şehir, fütüristik mimarisi, alışveriş merkezleri ve kültür merkezleri ile dikkat çeker. Şehrin modern yapıları, parkları ve Kazak mutfağı ile özgün bir Orta Asya deneyimi sunar.",
        population: '1.2 milyon',
        state: 'Akmola Eyaleti, Kazakistan',
        coordinate: {
            latitude: 51.1694,
            longitude: 71.4491
        },
        transportation: {
            airplane: "Nursultan Nazarbayev Havalimanı",
            train: "Astana Tren İstasyonu",
            bus: "Saparzhay Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Bayterek Kulesi',
                description: 'Kazakistan\'ın en ünlü kulesi'
            },
            {
                name: "Han Çadırı",
                description: "Kazakistan'ın en ünlü çadırı"
            },
            {
                name: "Barış Piramidi",
                description: "Kazakistan'ın en ünlü piramidi"
            },
        ],
        cuisine: [
            {
                name: "Kazakistan Mutfağı",
                description: "Kazakistan'ın en ünlü yemekleri"
            }
        ],
        imageUrl: require('../assets/Gorseller/astana.jpg')
    },
    {
        id: '57',
        name: 'Tahran',
        caption: 'İran\'ın modern ve tarihi başkenti',
        description: "Tahran, İran'ın başkenti ve en kalabalık şehridir. Golestan Sarayı, Azadi Kulesi ve Büyük Pazar ile ünlüdür. Elburz Dağları eteklerinde konumlanan şehir, müzeleri, geleneksel çarşıları ve İran mutfağı ile ziyaretçileri cezbeder. Şehrin tarihi yapıları, modern sanat galerileri ve Pers kültürü ile benzersiz bir İran deneyimi sunar.",
        population: '9.1 milyon',
        state: 'Tahran Eyaleti, İran',
        coordinate: {
            latitude: 35.6892,
            longitude: 51.3890
        },
        transportation: {
            airplane: "İmam Humeyni Uluslararası Havalimanı",
            train: "Tahran Tren İstasyonu",
            bus: "Tahran Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Golestan Sarayı',
                description: 'UNESCO Dünya Mirası saray kompleksi'
            },
            {
                name: "Azadi Kulesi",
                description: "Modern İran'ın simgesi"
            },
            {
                name: "Büyük Pazar",
                description: "Dünyanın en büyük kapalı çarşılarından"
            },
            {
                name: "Milad Kulesi",
                description: "İran'ın en yüksek kulesi"
            }
        ],
        cuisine: [
            {
                name: "Chelow Kebab",
                description: "İran'ın milli yemeği"
            },
            {
                name: "Ghormeh Sabzi",
                description: "Geleneksel sebzeli yahni"
            },
            {
                name: "Tahdig",
                description: "Kavrulmuş pilav kabuğu"
            },
            {
                name: "Fesenjan",
                description: "Nar soslu tavuk yahni"
            }
        ],
        imageUrl: require('../assets/Gorseller/tahran.jpg')
    },
    {
        id: '58',
        name: 'New Delhi',
        caption: 'Hindistan\'ın renkli ve kaotik başkenti',
        description: "New Delhi, Hindistan'ın başkenti ve en önemli metropollerinden biridir. Kızıl Kale, Kutub Minar ve Humayun Türbesi ile ünlüdür. Yamuna Nehri kıyısında konumlanan şehir, tarihi anıtları, baharat pazarları ve Hint mutfağı ile her yıl milyonlarca turisti ağırlar. Şehrin kolonyal mimarisi, tapınakları ve canlı sokak yaşamı ile otantik bir Hindistan deneyimi sunar.",
        population: '21.7 milyon',
        state: 'Delhi Bölgesi, Hindistan',
        coordinate: {
            latitude: 28.6139,
            longitude: 77.2090
        },
        transportation: {
            airplane: "Indira Gandhi Uluslararası Havalimanı",
            train: "New Delhi Tren İstasyonu",
            bus: "Kashmere Gate ISBT"
        },
        famousPlaces: [
            {
                name: 'Kızıl Kale',
                description: 'Hindistan\'ın en ünlü kale'
            },
            {
                name: "Kutub Minar",
                description: "Hindistan'ın en ünlü minarı"
            },
            {
                name: "Humayun Türbesi",
                description: "Hindistan'ın en ünlü türbesi"
            },
        ],
        cuisine: [
            {
                name: "Chelow Kebab",
                description: "İran'ın milli yemeği"
            },
            {
                name: "Ghormeh Sabzi",
                description: "Geleneksel sebzeli yahni"
            },
            {
                name: "Tahdig", 
                description: "Kavrulmuş pilav kabuğu"
            },
            {
                name: "Fesenjan",
                description: "Nar soslu tavuk yahni"
            }
        ],
        imageUrl: require('../assets/Gorseller/newdelhi.jpg')
    },
    {
        id: '65',
        name: 'Barcelona',
        caption: 'Gaudi\'nin modernist başkenti',
        description: "Barcelona, İspanya'nın en önemli kültür ve turizm merkezlerinden biridir. Sagrada Familia, Park Güell ve Casa Batlló gibi Gaudi'nin eserleri ile dünyaca ünlüdür. Akdeniz kıyısında konumlanan şehir, plajları, tapas barları ve futbol kültürü ile her yıl milyonlarca turisti ağırlar.",
        population: '1.6 milyon',
        state: 'Katalonya, İspanya',
        coordinate: {
            latitude: 41.3851,
            longitude: 2.1734
        },
        transportation: {
            airplane: "El Prat Havalimanı",
            train: "Barcelona Sants İstasyonu",
            bus: "Barcelona Nord"
        },
        famousPlaces: [
            {
                name: 'Sagrada Familia',
                description: 'Gaudi\'nin tamamlanmamış başyapıtı'
            },
            {
                name: "Park Güell",
                description: "Modernist park kompleksi"
            },
            {
                name: "La Rambla",
                description: "Ünlü yürüyüş caddesi"
            },
            {
                name: "Camp Nou",
                description: "FC Barcelona'nın stadyumu"
            }
        ],
        cuisine: [
            {
                name: "Paella",
                description: "Deniz ürünlü pirinç yemeği"
            },
            {
                name: "Tapas",
                description: "Çeşitli küçük atıştırmalıklar"
            },
            {
                name: "Crema Catalana",
                description: "Geleneksel karamelli tatlı"
            },
            {
                name: "Pan con Tomate",
                description: "Domatesli ekmek"
            }
        ],
        imageUrl: require('../assets/Gorseller/barcelona.jpg')
    },
    {
        id: '66',
        name: 'Edinburgh',
        caption: 'İskoçya\'nın tarihi başkenti',
        description: "Edinburgh, İskoçya'nın başkenti ve kültürel merkezidir. Edinburgh Kalesi, Royal Mile ve Arthur's Seat ile ünlüdür. Tarihi mimarisi, festivalleri ve edebi mirası ile her yıl milyonlarca turisti ağırlar.",
        population: '525 bin',
        state: 'İskoçya, Birleşik Krallık',
        coordinate: {
            latitude: 55.9533,
            longitude: -3.1883
        },
        transportation: {
            airplane: "Edinburgh Havalimanı",
            train: "Edinburgh Waverley İstasyonu",
            bus: "St Andrew Square"
        },
        famousPlaces: [
            {
                name: 'Edinburgh Kalesi',
                description: 'Şehre hakim tarihi kale'
            },
            {
                name: "Royal Mile",
                description: "Tarihi yürüyüş caddesi"
            },
            {
                name: "Holyrood Sarayı",
                description: "Kraliyet ailesi rezidansı"
            },
            {
                name: "Arthur's Seat",
                description: "Antik volkanik tepe"
            }
        ],
        cuisine: [
            {
                name: "Haggis",
                description: "Geleneksel İskoç yemeği"
            },
            {
                name: "Scotch Whisky",
                description: "İskoç viskisi"
            },
            {
                name: "Cullen Skink",
                description: "Kremalı balık çorbası"
            },
            {
                name: "Shortbread",
                description: "Geleneksel İskoç kurabiyesi"
            }
        ],
        imageUrl: require('../assets/Gorseller/edinburgh.jpg')
    },
    {
        id: '67',
        name: 'St. Petersburg',
        caption: 'Rusya\'nın kültür başkenti',
        description: "St. Petersburg, Rusya'nın ikinci büyük şehri ve kültür başkentidir. Hermitage Müzesi, Peterhof Sarayı ve Beyaz Geceler festivali ile ünlüdür. Neva Nehri üzerinde kurulu şehir, klasik mimarisi ve sanat kurumlarıyla öne çıkar.",
        population: '5.4 milyon',
        state: 'Kuzeybatı Federal Bölgesi, Rusya',
        coordinate: {
            latitude: 59.9343,
            longitude: 30.3351
        },
        transportation: {
            airplane: "Pulkovo Havalimanı",
            train: "Moskovsky İstasyonu",
            bus: "St. Petersburg Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Hermitage Müzesi',
                description: 'Dünyanın en büyük sanat müzelerinden'
            },
            {
                name: "Peterhof Sarayı",
                description: "Rus Versailles'ı olarak bilinen saray"
            },
            {
                name: "Kan Üzerine Kilisesi",
                description: "Renkli kubbeli tarihi kilise"
            },
            {
                name: "Nevsky Prospekti",
                description: "Ana alışveriş caddesi"
            }
        ],
        cuisine: [
            {
                name: "Beef Stroganoff",
                description: "St. Petersburg'da doğan klasik Rus yemeği"
            },
            {
                name: "Pyshki",
                description: "Geleneksel Rus çöreği"
            },
            {
                name: "Rassolnik",
                description: "Turşulu çorba"
            },
            {
                name: "Smelt Balığı",
                description: "Neva Nehri'nin meşhur balığı"
            }
        ],
        imageUrl: require('../assets/Gorseller/stpetersburg.jpg')
    },
    {
        id: '15',
        name: 'Batum',
        caption: 'Karadeniz\'in İncisi, Modern Mimari ve Tarihin Buluşma Noktası',
        description: "Batum, Gürcistan'ın Acara özerk bölgesinin başkenti ve en büyük şehridir. Modern mimarisi, tarihi yapıları, botanik bahçesi ve Karadeniz kıyısındaki bulvarıyla ünlüdür. Şehir, kumar turizmi, plajları ve subtropikal iklimi ile turistler için popüler bir destinasyondur. Avrupa tarzı meydanları, restore edilmiş eski şehir bölgesi ve modern gökdelenleri ile karakteristik bir şehir görünümü sunar.",
        population: '170 bin',
        state: 'Acara Özerk Cumhuriyeti',
        coordinate: {
            latitude: 41.6168,
            longitude: 41.6367
        },
        transportation: {
            airplane: "Batum Uluslararası Havalimanı",
            train: "Batum Tren İstasyonu",
            bus: "Batum Otobüs Terminali"
        },
        famousPlaces: [
            {
                name: 'Batum Bulvarı',
                description: 'Sahil boyunca uzanan tarihi yürüyüş alanı'
            },
            {
                name: "Batum Botanik Bahçesi",
                description: "150 yıllık geçmişe sahip botanik parkı"
            },
            {
                name: "Piazza Meydanı",
                description: "İtalyan mimarisi tarzında inşa edilmiş meydan"
            },
            {
                name: "Alfabe Kulesi",
                description: "Gürcü alfabesini temsil eden modern yapı"
            },
            {
                name: "Avrupa Meydanı",
                description: "Modern mimari örneği meydan"
            }
        ],
        events: [
            {
                name: "Batum Caz Festivali",
                date: "Temmuz",
                description: "Uluslararası caz festivali"
            },
            {
                name: "Batum Sanat Festivali",
                date: "Eylül",
                description: "Çağdaş sanat etkinlikleri"
            }
        ],
        cuisine: [
            {
                name: "Haçapuri",
                description: "Peynirli Gürcü pidesi"
            },
            {
                name: "Kinkhali",
                description: "Gürcü mantısı"
            },
            {
                name: "Acara Haçapurisi",
                description: "Yumurtalı peynirli pide"
            }
        ],
        museums: [
            {
                name: "Batum Arkeoloji Müzesi",
                description: "Tarihi eserler ve arkeolojik buluntular"
            },
            {
                name: "Batum Sanat Müzesi",
                description: "Modern ve klasik sanat eserleri"
            }
        ],
        shoppingAreas: [
            {
                name: "Batum Mall",
                description: "Modern alışveriş merkezi"
            },
            {
                name: "Metro City",
                description: "Şehir merkezi alışveriş bölgesi"
            },
            {
                name: "Eski Şehir Çarşısı",
                description: "Geleneksel alışveriş bölgesi"
            }
        ],
        neighborhoods: [
            {
                name: "Eski Şehir",
                description: "Tarihi yapılar ve sokaklar"
            },
            {
                name: "Sahil Bölgesi",
                description: "Modern oteller ve plajlar"
            },
            {
                name: "Gonio",
                description: "Sahil kasabası ve antik kale"
            }
        ],
        imageUrl: require('../assets/Gorseller/batum.jpg')
    }
]; 