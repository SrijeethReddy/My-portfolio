module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
      '^react-router-dom$': '<rootDir>/src/__mocks__/react-router-dom.js',
      '^framer-motion$': '<rootDir>/src/__mocks__/framer-motion.js',
    },
  };