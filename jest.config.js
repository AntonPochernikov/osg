module.exports = {
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**',
    '**/*.{js,jsx}',
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
