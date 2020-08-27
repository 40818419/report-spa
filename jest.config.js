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
  setupFiles: ['./jest-setup.ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  // preset: '@vue/cli-plugin-unit-jest',
  coveragePathIgnorePatterns: ['src/shims-vue.d.ts', 'src/shims-tsx.d.ts'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  transformIgnorePatterns: ['node_modules/(?!vue-router|@babel|vuetify)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
    'vue-jest': {
      hideStyleWarn: true,
    },
  },
};
