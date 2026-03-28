// ===================================================
// i18n/core.js — Translation engine & utilities
// ===================================================

// TRANSLATIONS is populated by each lang-xx.js file
const TRANSLATIONS = {};

// Get translation by key
function t(key, ...args) {
    const lang = localStorage.getItem('bm_language') || 'en';
    const translations = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const value = translations[key] || TRANSLATIONS.en[key];
    if (typeof value === 'function') return value(...args);
    return value || key;
}

// Available languages
const LANGUAGES = [
    { code: 'en', name: 'English',    flag: '🇬🇧' },
    { code: 'pl', name: 'Polski',     flag: '🇵🇱' },
    { code: 'ro', name: 'Română',     flag: '🇷🇴' },
    { code: 'el', name: 'Ελληνικά',   flag: '🇬🇷' },
    { code: 'ur', name: 'اردو',       flag: '🇵🇰' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ',     flag: '🇮🇳' },   // Punjabi (Indian)
    { code: 'bn', name: 'বাংলা',       flag: '🇧🇩' },   // Bengali
    { code: 'zh', name: '中文',        flag: '🇨🇳' },   // Simplified Chinese
    { code: 'ar', name: 'العربية',    flag: '🇸🇦' },   // Arabic
    { code: 'gu', name: 'ગુજરાતી',    flag: '🇮🇳' },   // Gujarati
    { code: 'hi', name: 'हिन्दी',      flag: '🇮🇳' },   // Hindi
    { code: 'pt', name: 'Português',  flag: '🇵🇹' }    // Portuguese
];

// Aisle name translations (plain text keys for reliable matching)
const AISLE_NAMES = {
    en: {},
    pl: {
        'Bakery':          'Piekarnia',
        'Fresh Food':      'Świeże produkty',
        'Frozen Food':     'Mrożonki',
        'Treats & Snacks': 'Słodycze i przekąski',
        'Food Cupboard':   'Spiżarnia',
        'Drinks':          'Napoje',
        'Baby & Toddler':  'Niemowlęta i dzieci',
        'Health & Beauty': 'Zdrowie i uroda',
        'Pets':            'Zwierzęta',
        'Household':       'Dom',
    },
    ro: {
        'Bakery':          'Brutărie',
        'Fresh Food':      'Produse proaspete',
        'Frozen Food':     'Produse congelate',
        'Treats & Snacks': 'Dulciuri și gustări',
        'Food Cupboard':   'Cămară',
        'Drinks':          'Băuturi',
        'Baby & Toddler':  'Bebeluși și copii mici',
        'Health & Beauty': 'Sănătate și frumusețe',
        'Pets':            'Animale de companie',
        'Household':       'Gospodărie',
    },
    el: {
        'Bakery':          'Φούρνος',
        'Fresh Food':      'Φρέσκα τρόφιμα',
        'Frozen Food':     'Κατεψυγμένα',
        'Treats & Snacks': 'Γλυκά & Σνακ',
        'Food Cupboard':   'Αποθήκη τροφίμων',
        'Drinks':          'Ποτά',
        'Baby & Toddler':  'Βρέφη & Νήπια',
        'Health & Beauty': 'Υγεία & Ομορφιά',
        'Pets':            'Κατοικίδια',
        'Household':       'Οικιακά',
    },
    ur: {
        'Bakery':          'بیکری',
        'Fresh Food':      'تازہ خوراک',
        'Frozen Food':     'منجمد خوراک',
        'Treats & Snacks': 'مٹھائی اور اسنیکس',
        'Food Cupboard':   'کھانے کا ذخیرہ',
        'Drinks':          'مشروبات',
        'Baby & Toddler':  'بچے',
        'Health & Beauty': 'صحت اور خوبصورتی',
        'Pets':            'پالتو جانور',
        'Household':       'گھریلو',
    },
    // New languages - Aisle translations
    pa: {
        'Bakery':          'ਬੇਕਰੀ',
        'Fresh Food':      'ਤਾਜ਼ਾ ਖਾਣਾ',
        'Frozen Food':     'ਫ੍ਰੋਜ਼ਨ ਫੂਡ',
        'Treats & Snacks': 'ਮਿਠਾਈ ਅਤੇ ਸਨੈਕਸ',
        'Food Cupboard':   'ਖਾਣਾ ਰੱਖਣ ਵਾਲੀ ਅਲਮਾਰੀ',
        'Drinks':          'ਪੀਣ ਵਾਲੀਆਂ ਚੀਜ਼ਾਂ',
        'Baby & Toddler':  'ਬੱਚੇ ਅਤੇ ਟਾਡਲਰ',
        'Health & Beauty': 'ਸਿਹਤ ਅਤੇ ਸੁੰਦਰਤਾ',
        'Pets':            'ਪਾਲਤੂ ਜਾਨਵਰ',
        'Household':       'ਘਰੇਲੂ',
    },
    bn: {
        'Bakery':          'বেকারি',
        'Fresh Food':      'তাজা খাবার',
        'Frozen Food':     'ফ্রোজেন খাবার',
        'Treats & Snacks': 'মিষ্টি ও স্ন্যাকস',
        'Food Cupboard':   'খাবারের আলমারি',
        'Drinks':          'পানীয়',
        'Baby & Toddler':  'শিশু ও টডলার',
        'Health & Beauty': 'স্বাস্থ্য ও সৌন্দর্য',
        'Pets':            'পোষা প্রাণী',
        'Household':       'ঘরোয়া',
    },
    zh: {
        'Bakery':          '面包房',
        'Fresh Food':      '新鲜食品',
        'Frozen Food':     '冷冻食品',
        'Treats & Snacks': '零食和甜点',
        'Food Cupboard':   '食品储藏柜',
        'Drinks':          '饮料',
        'Baby & Toddler':  '婴儿和幼儿',
        'Health & Beauty': '健康与美容',
        'Pets':            '宠物用品',
        'Household':       '家居用品',
    },
    ar: {
        'Bakery':          'مخبز',
        'Fresh Food':      'طعام طازج',
        'Frozen Food':     'طعام مجمد',
        'Treats & Snacks': 'حلويات ووجبات خفيفة',
        'Food Cupboard':   'مخزن الطعام',
        'Drinks':          'مشروبات',
        'Baby & Toddler':  'الأطفال الرضع والصغار',
        'Health & Beauty': 'الصحة والجمال',
        'Pets':            'الحيوانات الأليفة',
        'Household':       'المنزل',
    },
    gu: {
        'Bakery':          'બેકરી',
        'Fresh Food':      'તાજો ખોરાક',
        'Frozen Food':     'ફ્રોઝ઼ન ખોરાક',
        'Treats & Snacks': 'મિઠાઈ અને નાસ્તો',
        'Food Cupboard':   'ખોરાક સંગ્રહ',
        'Drinks':          'પીણાં',
        'Baby & Toddler':  'શિશુ અને બાળક',
        'Health & Beauty': 'સ્વાસ્થ્ય અને સૌંદર્ય',
        'Pets':            'પાળતુ પ્રાણી',
        'Household':       'ઘરવખરી',
    },
    hi: {
        'Bakery':          'बेकरी',
        'Fresh Food':      'ताजा खाना',
        'Frozen Food':     'फ्रोज़न खाना',
        'Treats & Snacks': 'मिठाई और नाश्ता',
        'Food Cupboard':   'खाद्य भंडार',
        'Drinks':          'पेय',
        'Baby & Toddler':  'शिशु और बच्चे',
        'Health & Beauty': 'स्वास्थ्य और सौंदर्य',
        'Pets':            'पालतू जानवर',
        'Household':       'घरेलू सामान',
    },
    pt: {
        'Bakery':          'Padaria',
        'Fresh Food':      'Produtos Frescos',
        'Frozen Food':     'Congelados',
        'Treats & Snacks': 'Guloseimas e Snacks',
        'Food Cupboard':   'Despensa',
        'Drinks':          'Bebidas',
        'Baby & Toddler':  'Bebé e Criança',
        'Health & Beauty': 'Saúde e Beleza',
        'Pets':            'Animais de Estimação',
        'Household':       'Casa',
    }
};

function translateAisleName(name) {
    const lang = localStorage.getItem('bm_language') || 'en';
    if (lang === 'en') return name;
    const map = AISLE_NAMES[lang] || {};
    const getWords = s => s.replace(/[^a-zA-Z0-9\s&']/g, ' ').replace(/\s+/g, ' ').trim();
    const nameWords = getWords(name);
    for (const [key, val] of Object.entries(map)) {
        if (getWords(key) === nameWords) return val;
    }
    return name;
}