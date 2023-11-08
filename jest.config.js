const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/node_modules/jest-css-modules",
    "^@/*/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/.storybook/",
    "<rootDir>/.vercel/",
  ],
};

module.exports = createJestConfig(customJestConfig);
