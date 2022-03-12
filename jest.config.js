// jest.config.js

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^pages(.*)$": "<rootDir>/components/pages/$1",
    "^context(.*)$": "<rootDir>/context/$1",
    "^hooks(.*)$": "<rootDir>/hooks/$1",
    "^resources(.*)$": "<rootDir>/resources/$1",
    "^components(.*)$": "<rootDir>/components/$1",
    "^d3-(.*)$": `d3-$1/dist/d3-$1`,
  },
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
