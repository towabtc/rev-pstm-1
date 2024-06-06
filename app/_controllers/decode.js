// Constants
const MAX_IMAGE_SIZE = 5000; // Maximum image size in pixels

// Utility functions
const generateRandomImageData = () => {
  const imageSize = Math.floor(Math.random() * MAX_IMAGE_SIZE) + 1;
  const imageData = [];
  for (let i = 0; i < imageSize; i++) {
    imageData.push(Math.floor(Math.random() * 256)); // Generating random pixel values (0-255)
  }
  return imageData;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchData = async (url) => {
  console.log(`Fetching image data from ${url}...`);
  await sleep(2000); // Simulating network delay
  console.log("Image data fetched successfully.");
  return { data: "Fake image data" };
};

const processData = (data) => {
  console.log("Processing image data...");
  // Some fake data processing logic
  return data;
};

// Graphic decoding functions
const decodeImageData = (imageData) => {
  console.log("Decoding image data...");
  // Some fake image decoding logic
  return "Decoded image";
};

const displayImage = (image) => {
  console.log("Displaying image...");
  // Some fake image display logic
  console.log("Image displayed successfully.");
};

// Main module
export const fetchProcessAndDecodeImage = async () => {
  try {
    const rawData = await fetchData("https://fakeapi.com/image");
    const processedData = processData(rawData);
    const imageData = generateRandomImageData();
    const decodedImage = decodeImageData(imageData);
    displayImage(decodedImage);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Exporting utility functions
export { generateRandomImageData, fetchData, processData };
