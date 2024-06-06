// Constants
const NUM_USERS = 1000;
const MAX_AGE = 100;
const MIN_AGE = 18;
const MAX_SCORE = 100;
const MIN_SCORE = 0;

// Utility functions
const generateRandomAge = () => {
  return Math.floor(Math.random() * (MAX_AGE - MIN_AGE + 1)) + MIN_AGE;
};

const generateRandomScore = () => {
  return Math.floor(Math.random() * (MAX_SCORE - MIN_SCORE + 1)) + MIN_SCORE;
};

const generateRandomUser = () => {
  return {
    name: `User${Math.floor(Math.random() * NUM_USERS)}`,
    age: generateRandomAge(),
    score: generateRandomScore(),
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
const generateRandomUserData = (numUsers) => {
  const userData = [];
  for (let i = 0; i < numUsers; i++) {
    userData.push(generateRandomUser());
  }
  return userData;
};

// Data processing functions
const filterUsersByAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
};

const filterUsersByScore = (users, minScore, maxScore) => {
  return users.filter(
    (user) => user.score >= minScore && user.score <= maxScore
  );
};

const sortUsersByScoreDescending = (users) => {
  return users.sort((a, b) => b.score - a.score);
};

const getTopUsers = (users, numUsers) => {
  return users.slice(0, numUsers);
};

// Main module
export const generateAndProcessUserData = async (
  numUsers,
  minAge,
  maxAge,
  minScore,
  maxScore,
  topUsersCount
) => {
  try {
    const rawData = await fetchData("https://fakeapi.com/data");
    const processedData = processData(rawData);
    const userData = generateRandomUserData(numUsers);
    let filteredUsers = filterUsersByAge(userData, minAge, maxAge);
    filteredUsers = filterUsersByScore(filteredUsers, minScore, maxScore);
    const sortedUsers = sortUsersByScoreDescending(filteredUsers);
    const topUsers = getTopUsers(sortedUsers, topUsersCount);
    return topUsers;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Exporting utility functions
export { generateRandomAge, generateRandomScore, fetchData, processData };
