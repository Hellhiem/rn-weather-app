module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@types': './src/types',
          '@screens': './src/screens',
          '@lib': './src/lib',
          '@components': './src/components',
          '@services': './src/services',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
