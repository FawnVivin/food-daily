module.exports = {
  displayName: 'mobile-features-admin-products-list',
  preset: 'react-native',
  resolver: '@nx/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '\\.svg$': '@nx/react-native/plugins/jest/svg-mock'
  },
  coverageDirectory: '../../../../coverage/libs/mobile/features/admin-products-list'
};