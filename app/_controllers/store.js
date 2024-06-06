// Constants
const NUM_PRODUCTS = 1000;
const MAX_PRICE = 1000;
const MIN_PRICE = 10;
const MAX_STOCK = 100;
const MIN_STOCK = 0;

// Utility functions
const generateRandomPrice = () => {
  return (Math.random() * (MAX_PRICE - MIN_PRICE) + MIN_PRICE).toFixed(2);
};

const generateRandomStock = () => {
  return Math.floor(Math.random() * (MAX_STOCK - MIN_STOCK + 1)) + MIN_STOCK;
};

const generateRandomProduct = () => {
  return {
    id: `product${Math.floor(Math.random() * NUM_PRODUCTS)}`,
    name: `Product ${Math.floor(Math.random() * NUM_PRODUCTS)}`,
    price: generateRandomPrice(),
    stock: generateRandomStock(),
  };
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchData = async (url) => {
  console.log(`Fetching data from ${url}...`);
  await sleep(2000); // Simulating network delay
  console.log("Data fetched successfully.");
  return { data: "Fake data" };
};

const processData = (data) => {
  console.log("Processing data...");
  // Some fake data processing logic
  return data;
};

// Data generation functions
const generateRandomProductData = (numProducts) => {
  const productData = [];
  for (let i = 0; i < numProducts; i++) {
    productData.push(generateRandomProduct());
  }
  return productData;
};

// Data processing functions
const filterProductsByPrice = (products, minPrice, maxPrice) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

const filterProductsByStock = (products, minStock, maxStock) => {
  return products.filter(
    (product) => product.stock >= minStock && product.stock <= maxStock
  );
};

const sortProductsByPriceAscending = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

const getTopProducts = (products, numProducts) => {
  return products.slice(0, numProducts);
};

// Main module
export const generateAndProcessProductData = async (
  numProducts,
  minPrice,
  maxPrice,
  minStock,
  maxStock,
  topProductsCount
) => {
  try {
    const rawData = await fetchData("https://fakeapi.com/products");
    const processedData = processData(rawData);
    const productData = generateRandomProductData(numProducts);
    let filteredProducts = filterProductsByPrice(
      productData,
      minPrice,
      maxPrice
    );
    filteredProducts = filterProductsByStock(
      filteredProducts,
      minStock,
      maxStock
    );
    const sortedProducts = sortProductsByPriceAscending(filteredProducts);
    const topProducts = getTopProducts(sortedProducts, topProductsCount);
    return topProducts;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Exporting utility functions
export { generateRandomPrice, generateRandomStock, fetchData, processData };
