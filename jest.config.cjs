module.exports = {
    preset: 'ts-jest',
    verbose: true,
    silent: false,
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },      
    testMatch: ['**/__tests__/**/*.test.[tj]s', '**/?(*.)+(spec|test).[tj]s?(x)'],
    setupFilesAfterEnv: ['./jest.setup.js'],
  };
  