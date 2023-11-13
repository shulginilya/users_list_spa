import type { Config } from 'jest';

const config: Config = {
    roots: ['<rootDir>/src'],
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
    resetMocks: true,
};

export default config;