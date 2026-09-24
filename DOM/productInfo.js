export const products = [
  {
    id: "1",
    name: "Polo T-shirt",
    brand: "Polo",
    category: "T-Shirts",
    price: 1299,
    discount: 99,
    description: "Classic cotton polo T-shirt with a comfortable regular fit.",
    rating: 4.5,
    reviews: 128,
    stocks: [
      { size: "S", stock: 0 },
      { size: "M", stock: 5 },
      { size: "L", stock: 10 },
      { size: "XL", stock: 0 }
    ],
    colors: ["Red", "Blue", "Green"],
    tags: ["Cotton", "Casual", "Polo"],
    isFeatured: true
  },

  {
    id: "2",
    name: "Classic Oxford Shirt",
    brand: "Allen",
    category: "Shirts",
    price: 1899,
    discount: 200,
    description: "Smart Oxford shirt suitable for casual and semi-formal occasions.",
    rating: 4.3,
    reviews: 94,
    stocks: [
      { size: "S", stock: 4 },
      { size: "M", stock: 8 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 2 }
    ],
    colors: ["White", "Sky Blue", "Navy"],
    tags: ["Formal", "Cotton", "Oxford"],
    isFeatured: false
  },

  {
    id: "3",
    name: "Oversized Graphic T-shirt",
    brand: "UrbanX",
    category: "T-Shirts",
    price: 999,
    discount: 150,
    description: "Trendy oversized T-shirt with a premium graphic print.",
    rating: 4.6,
    reviews: 215,
    stocks: [
      { size: "S", stock: 6 },
      { size: "M", stock: 12 },
      { size: "L", stock: 9 },
      { size: "XL", stock: 5 }
    ],
    colors: ["Black", "White", "Grey"],
    tags: ["Oversized", "Streetwear", "Trending"],
    isFeatured: true
  },

  {
    id: "4",
    name: "Slim Fit Jeans",
    brand: "DenimCo",
    category: "Jeans",
    price: 2499,
    discount: 300,
    description: "Stretchable slim-fit jeans designed for everyday comfort.",
    rating: 4.4,
    reviews: 178,
    stocks: [
      { size: "28", stock: 3 },
      { size: "30", stock: 8 },
      { size: "32", stock: 10 },
      { size: "34", stock: 4 },
      { size: "36", stock: 1 }
    ],
    colors: ["Dark Blue", "Black", "Light Blue"],
    tags: ["Denim", "Slim Fit", "Stretch"],
    isFeatured: true
  },

  {
    id: "5",
    name: "Cargo Jogger Pants",
    brand: "StreetFit",
    category: "Pants",
    price: 1799,
    discount: 250,
    description: "Comfortable cargo joggers with multiple utility pockets.",
    rating: 4.2,
    reviews: 87,
    stocks: [
      { size: "S", stock: 5 },
      { size: "M", stock: 7 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 3 }
    ],
    colors: ["Black", "Olive", "Beige"],
    tags: ["Cargo", "Joggers", "Casual"],
    isFeatured: false
  },

  {
    id: "6",
    name: "Hooded Sweatshirt",
    brand: "WinterWear",
    category: "Hoodies",
    price: 2199,
    discount: 400,
    description: "Warm fleece hoodie with a soft interior and adjustable hood.",
    rating: 4.7,
    reviews: 321,
    stocks: [
      { size: "S", stock: 2 },
      { size: "M", stock: 9 },
      { size: "L", stock: 7 },
      { size: "XL", stock: 4 }
    ],
    colors: ["Black", "Grey", "Maroon"],
    tags: ["Winter", "Fleece", "Hoodie"],
    isFeatured: true
  },

  {
    id: "7",
    name: "Regular Fit Chinos",
    brand: "UrbanMan",
    category: "Pants",
    price: 1699,
    discount: 200,
    description: "Versatile cotton chinos with a clean regular fit.",
    rating: 4.1,
    reviews: 73,
    stocks: [
      { size: "30", stock: 5 },
      { size: "32", stock: 8 },
      { size: "34", stock: 6 },
      { size: "36", stock: 2 }
    ],
    colors: ["Khaki", "Navy", "Black"],
    tags: ["Chinos", "Cotton", "Casual"],
    isFeatured: false
  },

  {
    id: "8",
    name: "Denim Jacket",
    brand: "BlueStone",
    category: "Jackets",
    price: 2899,
    discount: 500,
    description: "Classic denim jacket with a rugged and timeless look.",
    rating: 4.5,
    reviews: 156,
    stocks: [
      { size: "S", stock: 3 },
      { size: "M", stock: 5 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 2 }
    ],
    colors: ["Blue", "Black"],
    tags: ["Denim", "Jacket", "Classic"],
    isFeatured: true
  },

  {
    id: "9",
    name: "Running Sneakers",
    brand: "SpeedRun",
    category: "Shoes",
    price: 3299,
    discount: 600,
    description: "Lightweight running shoes with breathable mesh and cushioned soles.",
    rating: 4.6,
    reviews: 412,
    stocks: [
      { size: "7", stock: 4 },
      { size: "8", stock: 9 },
      { size: "9", stock: 12 },
      { size: "10", stock: 7 },
      { size: "11", stock: 2 }
    ],
    colors: ["Black", "White", "Red"],
    tags: ["Running", "Sports", "Lightweight"],
    isFeatured: true
  },

  {
    id: "10",
    name: "Leather Casual Shoes",
    brand: "WalkPro",
    category: "Shoes",
    price: 2999,
    discount: 350,
    description: "Premium casual shoes made with a smooth leather finish.",
    rating: 4.3,
    reviews: 119,
    stocks: [
      { size: "7", stock: 3 },
      { size: "8", stock: 5 },
      { size: "9", stock: 7 },
      { size: "10", stock: 4 }
    ],
    colors: ["Brown", "Black"],
    tags: ["Leather", "Casual", "Premium"],
    isFeatured: false
  },

  {
    id: "11",
    name: "Basic Crew Neck T-shirt",
    brand: "Everyday",
    category: "T-Shirts",
    price: 699,
    discount: 100,
    description: "Soft cotton crew-neck T-shirt for everyday wear.",
    rating: 4.4,
    reviews: 532,
    stocks: [
      { size: "S", stock: 15 },
      { size: "M", stock: 20 },
      { size: "L", stock: 18 },
      { size: "XL", stock: 10 }
    ],
    colors: ["White", "Black", "Grey", "Navy"],
    tags: ["Basic", "Cotton", "Everyday"],
    isFeatured: false
  },

  {
    id: "12",
    name: "Linen Summer Shirt",
    brand: "SummerStyle",
    category: "Shirts",
    price: 1599,
    discount: 200,
    description: "Breathable linen-blend shirt designed for warm weather.",
    rating: 4.5,
    reviews: 102,
    stocks: [
      { size: "S", stock: 5 },
      { size: "M", stock: 7 },
      { size: "L", stock: 8 },
      { size: "XL", stock: 3 }
    ],
    colors: ["White", "Beige", "Sky Blue"],
    tags: ["Linen", "Summer", "Breathable"],
    isFeatured: true
  },

  {
    id: "13",
    name: "Bomber Jacket",
    brand: "UrbanX",
    category: "Jackets",
    price: 3199,
    discount: 500,
    description: "Modern bomber jacket with ribbed cuffs and lightweight padding.",
    rating: 4.4,
    reviews: 88,
    stocks: [
      { size: "S", stock: 2 },
      { size: "M", stock: 6 },
      { size: "L", stock: 5 },
      { size: "XL", stock: 3 }
    ],
    colors: ["Black", "Green", "Navy"],
    tags: ["Bomber", "Winter", "Streetwear"],
    isFeatured: true
  },

  {
    id: "14",
    name: "Cotton Shorts",
    brand: "EasyWear",
    category: "Shorts",
    price: 899,
    discount: 100,
    description: "Comfortable cotton shorts with an elastic waistband.",
    rating: 4.2,
    reviews: 64,
    stocks: [
      { size: "S", stock: 8 },
      { size: "M", stock: 12 },
      { size: "L", stock: 9 },
      { size: "XL", stock: 5 }
    ],
    colors: ["Black", "Grey", "Khaki"],
    tags: ["Cotton", "Summer", "Casual"],
    isFeatured: false
  },

  {
    id: "15",
    name: "Formal Blazer",
    brand: "Gentleman",
    category: "Blazers",
    price: 4999,
    discount: 700,
    description: "Tailored formal blazer suitable for business and special occasions.",
    rating: 4.7,
    reviews: 76,
    stocks: [
      { size: "S", stock: 1 },
      { size: "M", stock: 4 },
      { size: "L", stock: 5 },
      { size: "XL", stock: 2 }
    ],
    colors: ["Black", "Navy", "Charcoal"],
    tags: ["Formal", "Blazer", "Premium"],
    isFeatured: true
  },

  {
    id: "16",
    name: "Sports Track Pants",
    brand: "ActivePro",
    category: "Sportswear",
    price: 1299,
    discount: 150,
    description: "Flexible track pants designed for workouts and outdoor activities.",
    rating: 4.3,
    reviews: 143,
    stocks: [
      { size: "S", stock: 6 },
      { size: "M", stock: 10 },
      { size: "L", stock: 8 },
      { size: "XL", stock: 4 }
    ],
    colors: ["Black", "Grey", "Navy"],
    tags: ["Sports", "Training", "Comfort"],
    isFeatured: false
  },

  {
    id: "17",
    name: "Casual Canvas Sneakers",
    brand: "StreetStep",
    category: "Shoes",
    price: 1899,
    discount: 250,
    description: "Minimal canvas sneakers perfect for everyday casual outfits.",
    rating: 4.4,
    reviews: 201,
    stocks: [
      { size: "7", stock: 5 },
      { size: "8", stock: 8 },
      { size: "9", stock: 10 },
      { size: "10", stock: 6 }
    ],
    colors: ["White", "Black", "Green"],
    tags: ["Canvas", "Casual", "Sneakers"],
    isFeatured: false
  },

  {
    id: "18",
    name: "Knitted Polo Sweater",
    brand: "WinterWear",
    category: "Sweaters",
    price: 2399,
    discount: 350,
    description: "Soft knitted polo sweater providing warmth with a stylish look.",
    rating: 4.6,
    reviews: 91,
    stocks: [
      { size: "S", stock: 3 },
      { size: "M", stock: 7 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 2 }
    ],
    colors: ["Cream", "Brown", "Navy"],
    tags: ["Sweater", "Winter", "Knitted"],
    isFeatured: true
  },

  {
    id: "19",
    name: "Premium Leather Belt",
    brand: "Gentleman",
    category: "Accessories",
    price: 999,
    discount: 100,
    description: "Genuine leather belt with a durable metal buckle.",
    rating: 4.5,
    reviews: 267,
    stocks: [
      { size: "30", stock: 5 },
      { size: "32", stock: 8 },
      { size: "34", stock: 7 },
      { size: "36", stock: 4 },
      { size: "38", stock: 2 }
    ],
    colors: ["Black", "Brown"],
    tags: ["Leather", "Belt", "Accessories"],
    isFeatured: false
  },

  {
    id: "20",
    name: "Classic Baseball Cap",
    brand: "UrbanX",
    category: "Accessories",
    price: 599,
    discount: 50,
    description: "Adjustable cotton baseball cap with a curved brim.",
    rating: 4.2,
    reviews: 183,
    stocks: [
      { size: "Free Size", stock: 20 }
    ],
    colors: ["Black", "White", "Red", "Navy"],
    tags: ["Cap", "Cotton", "Casual"],
    isFeatured: false
  },

  {
    id: "21",
    name: "Premium Cotton Kurta",
    brand: "EthnicWear",
    category: "Kurtas",
    price: 1799,
    discount: 250,
    description: "Comfortable cotton kurta with a traditional yet modern design.",
    rating: 4.6,
    reviews: 134,
    stocks: [
      { size: "S", stock: 4 },
      { size: "M", stock: 8 },
      { size: "L", stock: 7 },
      { size: "XL", stock: 3 },
      { size: "XXL", stock: 1 }
    ],
    colors: ["White", "Cream", "Black", "Blue"],
    tags: ["Kurta", "Ethnic", "Cotton"],
    isFeatured: true
  }
];