module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,vue}',
    '!src/main.ts',
    '!src/registerServiceWorker.ts',
    '!src/router/index.ts',
    '!src/store/index.ts',
    '!src/shims-tsx.d.ts',
    '!src/**/module.ts',
    '!src/**/interfaces.ts',
    '!src/plugins/*',
  ],
  testMatch: [
    '**/*.spec.[jt]s?(x)',
  ],
};
