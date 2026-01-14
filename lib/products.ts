export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'dates' | 'dry-fruits' | 'nuts';
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  inStock: boolean;
  inventory: number;
  unit: string;
  featured: boolean;
  benefits: string[];
  nutritionFacts: {
    calories: string;
    protein: string;
    fiber: string;
    vitamins: string[];
  };
  origin: string;
  grade: string;
  specifications: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  // PREMIUM DATES
  {
    id: '1',
    slug: 'medjool-dates-premium',
    name: 'Medjool Dates',
    category: 'dates',
    price: 850,
    originalPrice: 1200,
    description: 'Large, soft, and incredibly sweet premium Medjool dates. Known as the "King of Dates".',
    longDescription: 'Our premium Medjool dates are handpicked from the finest date palms. These large, succulent dates offer an irresistibly soft texture and rich caramel-like sweetness. Perfect for wholesale buyers seeking the highest quality dates for their customers.',
    image: '/images/medjool-dates.jpg',
    images: ['/images/medjool-dates.jpg', '/images/medjool-dates-2.jpg', '/images/medjool-dates-3.jpg'],
    inStock: true,
    inventory: 250,
    unit: 'kg',
    featured: true,
    benefits: [
      'Rich in natural sugars for instant energy',
      'High in fiber for digestive health',
      'Packed with potassium and magnesium',
      'Natural antioxidants',
      'Supports heart health'
    ],
    nutritionFacts: {
      calories: '277 per 100g',
      protein: '1.8g per 100g',
      fiber: '6.7g per 100g',
      vitamins: ['Vitamin B6', 'Niacin', 'Pantothenic Acid', 'Vitamin K']
    },
    origin: 'Jordan / Palestine',
    grade: 'Premium AAA',
    specifications: [
      { label: 'Size', value: 'Large (Jumbo)' },
      { label: 'Moisture', value: '20-25%' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Packaging', value: 'Food-grade sealed boxes' }
    ]
  },
  {
    id: '2',
    slug: 'ajwa-dates-madinah',
    name: 'Ajwa Dates (Madinah)',
    category: 'dates',
    price: 1850,
    originalPrice: 2400,
    description: 'Sacred Ajwa dates from Madinah. Dark, soft, and uniquely flavored with exceptional health benefits.',
    longDescription: 'Authentic Ajwa dates sourced directly from Madinah. These premium dark dates are renowned for their unique taste and numerous health benefits. Highly sought after by discerning customers.',
    image: '/images/ajwa-dates.jpg',
    images: ['/images/ajwa-dates.jpg', '/images/ajwa-dates-2.jpg', '/images/ajwa-dates-3.jpg'],
    inStock: true,
    inventory: 120,
    unit: 'kg',
    featured: true,
    benefits: [
      'Renowned for medicinal properties',
      'Rich in antioxidants',
      'Supports cardiovascular health',
      'Natural anti-inflammatory',
      'Boosts immune system'
    ],
    nutritionFacts: {
      calories: '282 per 100g',
      protein: '2.5g per 100g',
      fiber: '8g per 100g',
      vitamins: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Iron']
    },
    origin: 'Madinah, Saudi Arabia',
    grade: 'Premium Madinah Original',
    specifications: [
      { label: 'Size', value: 'Medium' },
      { label: 'Color', value: 'Dark Brown/Black' },
      { label: 'Moisture', value: '18-22%' },
      { label: 'Shelf Life', value: '18 months' }
    ]
  },
  {
    id: '3',
    slug: 'kimia-dates-iran',
    name: 'Kimia Dates',
    category: 'dates',
    price: 650,
    originalPrice: 900,
    description: 'Iranian Kimia dates with dark color, soft texture, and rich sweet flavor.',
    longDescription: 'Premium Kimia dates from Iran, known for their dark appearance and exceptional sweetness. These dates are perfect for wholesale distribution and are highly popular among customers.',
    image: '/images/kimia-dates.jpg',
    images: ['/images/kimia-dates.jpg', '/images/kimia-dates-2.jpg'],
    inStock: true,
    inventory: 300,
    unit: 'kg',
    featured: true,
    benefits: [
      'Natural energy booster',
      'Rich in essential minerals',
      'Supports bone health',
      'Good source of iron',
      'Helps regulate blood sugar'
    ],
    nutritionFacts: {
      calories: '270 per 100g',
      protein: '2.2g per 100g',
      fiber: '7.5g per 100g',
      vitamins: ['Potassium', 'Magnesium', 'Copper', 'Manganese']
    },
    origin: 'Iran',
    grade: 'Grade A',
    specifications: [
      { label: 'Size', value: 'Medium to Large' },
      { label: 'Texture', value: 'Soft and Moist' },
      { label: 'Moisture', value: '22-26%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },
  {
    id: '4',
    slug: 'safawi-dates-premium',
    name: 'Safawi Dates',
    category: 'dates',
    price: 750,
    originalPrice: 1000,
    description: 'Premium Safawi dates from Saudi Arabia. Dark, soft, and deliciously sweet.',
    longDescription: 'High-quality Safawi dates characterized by their dark color and soft texture. These dates offer a perfect balance of sweetness and nutritional value, ideal for bulk orders.',
    image: '/images/safawi-dates.jpg',
    images: ['/images/safawi-dates.jpg', '/images/safawi-dates-2.jpg'],
    inStock: true,
    inventory: 180,
    unit: 'kg',
    featured: false,
    benefits: [
      'Excellent source of natural energy',
      'High in dietary fiber',
      'Contains essential minerals',
      'Supports digestive health',
      'Natural sweetener alternative'
    ],
    nutritionFacts: {
      calories: '275 per 100g',
      protein: '2g per 100g',
      fiber: '7g per 100g',
      vitamins: ['Iron', 'Calcium', 'Phosphorus', 'Vitamin B']
    },
    origin: 'Saudi Arabia',
    grade: 'Premium Grade',
    specifications: [
      { label: 'Size', value: 'Medium' },
      { label: 'Color', value: 'Dark Brown' },
      { label: 'Moisture', value: '20-24%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },
  {
    id: '5',
    slug: 'mabroom-dates-luxury',
    name: 'Mabroom Dates',
    category: 'dates',
    price: 950,
    originalPrice: 1300,
    description: 'Luxury Mabroom dates with elongated shape, amber color, and chewy texture.',
    longDescription: 'Premium Mabroom dates known for their distinctive elongated shape and beautiful amber color. These dates offer a unique chewy texture and are highly prized by date connoisseurs.',
    image: '/images/mabroom-dates.jpg',
    images: ['/images/mabroom-dates.jpg', '/images/mabroom-dates-2.jpg'],
    inStock: true,
    inventory: 150,
    unit: 'kg',
    featured: false,
    benefits: [
      'Long-lasting energy source',
      'Rich in antioxidants',
      'Supports heart health',
      'Good for skin health',
      'Natural immune booster'
    ],
    nutritionFacts: {
      calories: '280 per 100g',
      protein: '2.3g per 100g',
      fiber: '7.8g per 100g',
      vitamins: ['Vitamin A', 'Vitamin K', 'Folate', 'Niacin']
    },
    origin: 'Saudi Arabia',
    grade: 'Luxury Grade',
    specifications: [
      { label: 'Size', value: 'Large Elongated' },
      { label: 'Color', value: 'Amber/Light Brown' },
      { label: 'Texture', value: 'Chewy' },
      { label: 'Shelf Life', value: '15 months' }
    ]
  },

  // DRY FRUITS
  {
    id: '6',
    slug: 'golden-raisins-premium',
    name: 'Golden Raisins',
    category: 'dry-fruits',
    price: 320,
    originalPrice: 450,
    description: 'Premium golden raisins - naturally sweet, plump, and bursting with flavor.',
    longDescription: 'Our golden raisins are carefully selected and processed to retain their natural sweetness and nutrients. Perfect for baking, snacking, or adding to various dishes.',
    image: '/images/golden-raisins.jpg',
    images: ['/images/golden-raisins.jpg', '/images/golden-raisins-2.jpg'],
    inStock: true,
    inventory: 400,
    unit: 'kg',
    featured: true,
    benefits: [
      'Rich in natural sugars',
      'High in iron and antioxidants',
      'Supports digestive health',
      'Good for bone health',
      'Natural energy boost'
    ],
    nutritionFacts: {
      calories: '299 per 100g',
      protein: '3.1g per 100g',
      fiber: '3.7g per 100g',
      vitamins: ['Iron', 'Potassium', 'Copper', 'Vitamin B6']
    },
    origin: 'Afghanistan / USA',
    grade: 'Premium AAA',
    specifications: [
      { label: 'Size', value: 'Medium to Large' },
      { label: 'Color', value: 'Golden Yellow' },
      { label: 'Moisture', value: '12-15%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },
  {
    id: '7',
    slug: 'turkish-apricots-dried',
    name: 'Turkish Apricots',
    category: 'dry-fruits',
    price: 580,
    originalPrice: 780,
    description: 'Premium Turkish dried apricots - naturally sweet and incredibly nutritious.',
    longDescription: 'Authentic Turkish dried apricots sun-dried to perfection. These premium apricots offer exceptional taste and are packed with vitamins and minerals.',
    image: '/images/turkish-apricots.jpg',
    images: ['/images/turkish-apricots.jpg', '/images/turkish-apricots-2.jpg'],
    inStock: true,
    inventory: 220,
    unit: 'kg',
    featured: true,
    benefits: [
      'Excellent source of Vitamin A',
      'Rich in dietary fiber',
      'Supports eye health',
      'Boosts immune system',
      'Natural antioxidants'
    ],
    nutritionFacts: {
      calories: '241 per 100g',
      protein: '3.4g per 100g',
      fiber: '7.3g per 100g',
      vitamins: ['Vitamin A', 'Vitamin E', 'Potassium', 'Iron']
    },
    origin: 'Turkey',
    grade: 'Premium Quality',
    specifications: [
      { label: 'Processing', value: 'Sun-Dried' },
      { label: 'Size', value: 'Whole Fruit' },
      { label: 'Moisture', value: '18-22%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },
  {
    id: '8',
    slug: 'dried-figs-premium',
    name: 'Premium Dried Figs',
    category: 'dry-fruits',
    price: 480,
    originalPrice: 650,
    description: 'Sweet and chewy premium dried figs - a natural source of energy and fiber.',
    longDescription: 'Our premium dried figs are carefully selected for their size, sweetness, and nutritional value. Perfect for wholesale distribution to health-conscious customers.',
    image: '/images/dried-figs.jpg',
    images: ['/images/dried-figs.jpg', '/images/dried-figs-2.jpg'],
    inStock: true,
    inventory: 280,
    unit: 'kg',
    featured: false,
    benefits: [
      'High in dietary fiber',
      'Rich in calcium and potassium',
      'Supports digestive health',
      'Natural laxative properties',
      'Good for bone health'
    ],
    nutritionFacts: {
      calories: '249 per 100g',
      protein: '3.3g per 100g',
      fiber: '9.8g per 100g',
      vitamins: ['Calcium', 'Iron', 'Magnesium', 'Vitamin K']
    },
    origin: 'Turkey / Iran',
    grade: 'Grade A',
    specifications: [
      { label: 'Size', value: 'Medium to Large' },
      { label: 'Type', value: 'Whole Dried' },
      { label: 'Moisture', value: '20-25%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },
  {
    id: '9',
    slug: 'pitted-prunes-california',
    name: 'California Pitted Prunes',
    category: 'dry-fruits',
    price: 420,
    originalPrice: 580,
    description: 'Premium pitted prunes from California - sweet, soft, and nutritious.',
    longDescription: 'Top-quality California prunes, carefully pitted for convenience. Known for their exceptional sweetness and health benefits, particularly for digestive health.',
    image: '/images/pitted-prunes.jpg',
    images: ['/images/pitted-prunes.jpg', '/images/pitted-prunes-2.jpg'],
    inStock: true,
    inventory: 350,
    unit: 'kg',
    featured: false,
    benefits: [
      'Excellent for digestive health',
      'High in antioxidants',
      'Supports bone density',
      'Natural source of energy',
      'Rich in vitamins and minerals'
    ],
    nutritionFacts: {
      calories: '240 per 100g',
      protein: '2.2g per 100g',
      fiber: '7.1g per 100g',
      vitamins: ['Vitamin K', 'Vitamin A', 'Potassium', 'Iron']
    },
    origin: 'California, USA',
    grade: 'Premium Grade',
    specifications: [
      { label: 'Type', value: 'Pitted' },
      { label: 'Size', value: 'Medium' },
      { label: 'Moisture', value: '28-32%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },
  {
    id: '10',
    slug: 'dried-cranberries-sweetened',
    name: 'Sweetened Dried Cranberries',
    category: 'dry-fruits',
    price: 520,
    originalPrice: 720,
    description: 'Premium sweetened cranberries - tart, sweet, and packed with antioxidants.',
    longDescription: 'Our premium dried cranberries are lightly sweetened to balance their natural tartness. Perfect for snacking, baking, or adding to salads and cereals.',
    image: '/images/dried-cranberries.jpg',
    images: ['/images/dried-cranberries.jpg', '/images/dried-cranberries-2.jpg'],
    inStock: true,
    inventory: 200,
    unit: 'kg',
    featured: false,
    benefits: [
      'Rich in antioxidants',
      'Supports urinary tract health',
      'Boosts immune system',
      'Good for heart health',
      'Anti-inflammatory properties'
    ],
    nutritionFacts: {
      calories: '308 per 100g',
      protein: '0.1g per 100g',
      fiber: '5.3g per 100g',
      vitamins: ['Vitamin C', 'Vitamin E', 'Vitamin K', 'Manganese']
    },
    origin: 'USA / Canada',
    grade: 'Premium Quality',
    specifications: [
      { label: 'Type', value: 'Sweetened' },
      { label: 'Color', value: 'Deep Red' },
      { label: 'Moisture', value: '15-18%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },

  // PREMIUM NUTS
  {
    id: '11',
    slug: 'california-almonds-premium',
    name: 'California Almonds',
    category: 'nuts',
    price: 680,
    originalPrice: 900,
    description: 'Premium California almonds - crunchy, nutritious, and packed with protein.',
    longDescription: 'Top-grade California almonds known for their superior quality, taste, and nutritional value. Perfect for health-conscious customers and wholesale distribution.',
    image: '/images/california-almonds.jpg',
    images: ['/images/california-almonds.jpg', '/images/california-almonds-2.jpg'],
    inStock: true,
    inventory: 500,
    unit: 'kg',
    featured: true,
    benefits: [
      'Excellent source of protein',
      'Rich in Vitamin E',
      'Supports heart health',
      'Good for weight management',
      'Lowers cholesterol levels'
    ],
    nutritionFacts: {
      calories: '579 per 100g',
      protein: '21.2g per 100g',
      fiber: '12.5g per 100g',
      vitamins: ['Vitamin E', 'Magnesium', 'Calcium', 'Phosphorus']
    },
    origin: 'California, USA',
    grade: 'Premium AAA',
    specifications: [
      { label: 'Type', value: 'Raw/Roasted Available' },
      { label: 'Size', value: '23-25mm' },
      { label: 'Moisture', value: '4-6%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },
  {
    id: '12',
    slug: 'whole-cashews-w320',
    name: 'Whole Cashews W320',
    category: 'nuts',
    price: 850,
    originalPrice: 1100,
    description: 'Premium W320 cashews - creamy, buttery, and perfectly sized.',
    longDescription: 'Top-quality W320 grade cashews offering the perfect balance of size, taste, and nutrition. These premium cashews are highly sought after for their creamy texture and rich flavor.',
    image: '/images/whole-cashews.jpg',
    images: ['/images/whole-cashews.jpg', '/images/whole-cashews-2.jpg'],
    inStock: true,
    inventory: 380,
    unit: 'kg',
    featured: true,
    benefits: [
      'Rich in healthy fats',
      'Good source of protein',
      'Supports heart health',
      'Contains essential minerals',
      'Boosts brain function'
    ],
    nutritionFacts: {
      calories: '553 per 100g',
      protein: '18.2g per 100g',
      fiber: '3.3g per 100g',
      vitamins: ['Copper', 'Magnesium', 'Zinc', 'Iron']
    },
    origin: 'Vietnam / India',
    grade: 'W320 Premium',
    specifications: [
      { label: 'Grade', value: 'W320 (Whole)' },
      { label: 'Count', value: '320 kernels/lb' },
      { label: 'Moisture', value: '3-5%' },
      { label: 'Shelf Life', value: '12 months' }
    ]
  },
  {
    id: '13',
    slug: 'roasted-pistachios-premium',
    name: 'Roasted Pistachios',
    category: 'nuts',
    price: 1200,
    originalPrice: 1600,
    description: 'Premium roasted pistachios - perfectly salted and bursting with flavor.',
    longDescription: 'Our premium pistachios are carefully roasted and lightly salted to enhance their natural flavor. These nuts are popular for their unique taste and impressive health benefits.',
    image: '/images/roasted-pistachios.jpg',
    images: ['/images/roasted-pistachios.jpg', '/images/roasted-pistachios-2.jpg'],
    inStock: true,
    inventory: 180,
    unit: 'kg',
    featured: true,
    benefits: [
      'Rich in antioxidants',
      'Supports eye health',
      'Good for heart health',
      'Helps with weight management',
      'Regulates blood sugar'
    ],
    nutritionFacts: {
      calories: '560 per 100g',
      protein: '20.2g per 100g',
      fiber: '10.6g per 100g',
      vitamins: ['Vitamin B6', 'Thiamine', 'Copper', 'Phosphorus']
    },
    origin: 'Iran / USA',
    grade: 'Premium Grade',
    specifications: [
      { label: 'Type', value: 'Roasted & Salted' },
      { label: 'Size', value: 'Large' },
      { label: 'Moisture', value: '3-5%' },
      { label: 'Shelf Life', value: '9 months' }
    ]
  },
  {
    id: '14',
    slug: 'walnut-halves-premium',
    name: 'Walnut Halves',
    category: 'nuts',
    price: 780,
    originalPrice: 1050,
    description: 'Premium walnut halves - brain-shaped superfood packed with Omega-3.',
    longDescription: 'High-quality walnut halves rich in Omega-3 fatty acids. Known for their brain-boosting properties and heart-healthy benefits. Perfect for wholesale distribution.',
    image: '/images/walnut-halves.jpg',
    images: ['/images/walnut-halves.jpg', '/images/walnut-halves-2.jpg'],
    inStock: true,
    inventory: 240,
    unit: 'kg',
    featured: false,
    benefits: [
      'Excellent source of Omega-3',
      'Supports brain health',
      'Good for heart health',
      'Anti-inflammatory properties',
      'Rich in antioxidants'
    ],
    nutritionFacts: {
      calories: '654 per 100g',
      protein: '15.2g per 100g',
      fiber: '6.7g per 100g',
      vitamins: ['Omega-3', 'Vitamin E', 'Folate', 'Magnesium']
    },
    origin: 'USA / Chile',
    grade: 'Premium Grade',
    specifications: [
      { label: 'Type', value: 'Halves & Pieces' },
      { label: 'Size', value: 'Large Halves' },
      { label: 'Moisture', value: '3-5%' },
      { label: 'Shelf Life', value: '9 months' }
    ]
  },
  {
    id: '15',
    slug: 'mixed-nuts-deluxe',
    name: 'Deluxe Mixed Nuts',
    category: 'nuts',
    price: 920,
    originalPrice: 1250,
    description: 'Premium mixed nuts blend - almonds, cashews, pistachios, and walnuts.',
    longDescription: 'Our deluxe mixed nuts blend combines the finest almonds, cashews, pistachios, and walnuts. A perfect mix for customers looking for variety and nutrition in one package.',
    image: '/images/mixed-nuts.jpg',
    images: ['/images/mixed-nuts.jpg', '/images/mixed-nuts-2.jpg'],
    inStock: true,
    inventory: 300,
    unit: 'kg',
    featured: true,
    benefits: [
      'Complete nutrition in one mix',
      'Rich in proteins and healthy fats',
      'Variety of vitamins and minerals',
      'Perfect energy snack',
      'Supports overall health'
    ],
    nutritionFacts: {
      calories: '607 per 100g',
      protein: '19.5g per 100g',
      fiber: '8.2g per 100g',
      vitamins: ['Multiple vitamins', 'Minerals', 'Omega-3', 'Antioxidants']
    },
    origin: 'Multiple Origins',
    grade: 'Deluxe Blend',
    specifications: [
      { label: 'Mix', value: 'Almonds, Cashews, Pistachios, Walnuts' },
      { label: 'Type', value: 'Roasted & Salted' },
      { label: 'Moisture', value: '3-5%' },
      { label: 'Shelf Life', value: '9 months' }
    ]
  },
];

export const categories = [
  { name: 'All Products', value: 'all' },
  { name: 'Premium Dates', value: 'dates' },
  { name: 'Dry Fruits', value: 'dry-fruits' },
  { name: 'Premium Nuts', value: 'nuts' },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getRelatedProducts = (currentProductId: string, category: string, limit: number = 4): Product[] => {
  return products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, limit);
};