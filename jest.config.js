const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@sections/(.*)$': '<rootDir>/src/sections/$1',
    '^@themes/(.*)$': '<rootDir>/src/themes/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@views/(.*)$': '<rootDir>/src/views/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@layout/(.*)$': '<rootDir>/src/layout/$1',
    '^@public/(.*)$': '<rootDir>/public/$1'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: ['src/sections/auth/auth-forms/AuthRegister/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 60,
      functions: 60,
      lines: 80
    }
  }
};

module.exports = createJestConfig(customJestConfig);
