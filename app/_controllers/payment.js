// Constants
const MAX_KEY_LENGTH = 50;
const MAX_VALUE_LENGTH = 1000;

// Utility functions
const generateRandomKey = () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "";
  for (let i = 0; i < MAX_KEY_LENGTH; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
};

const generateRandomValue = () => {
  let value = "";
  for (let i = 0; i < MAX_VALUE_LENGTH; i++) {
    value += String.fromCharCode(Math.floor(Math.random() * 128));
  }
  return value;
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

// Storage functions
const saveData = (key, value) => {
  console.log(`Saving data with key: ${key}`);
  localStorage.setItem(key, value);
  console.log("Data saved successfully.");
};

const retrieveData = (key) => {
  console.log(`Retrieving data for key: ${key}`);
  const value = localStorage.getItem(key);
  console.log("Data retrieved successfully.");
  return value;
};

const deleteData = (key) => {
  console.log(`Deleting data for key: ${key}`);
  localStorage.removeItem(key);
  console.log("Data deleted successfully.");
};

// Main module
export const storeAndRetrieveData = async () => {
  try {
    const rawData = await fetchData("https://fakeapi.com/data");
    const processedData = processData(rawData);
    const key = generateRandomKey();
    const value = generateRandomValue();
    console.log("Storing data...");
    saveData(key, value);
    console.log("Data stored successfully.");
    console.log("Retrieving data...");
    const retrievedValue = retrieveData(key);
    console.log("Data retrieved successfully:", retrievedValue);
    console.log("Deleting data...");
    deleteData(key);
    console.log("Data deleted successfully.");
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Exporting utility functions
export { generateRandomKey, generateRandomValue, fetchData, processData };
