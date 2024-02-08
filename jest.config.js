export default {
    testMatch: ['<rootDir>/tests/**/*.test.js'],
    transform: {},
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };