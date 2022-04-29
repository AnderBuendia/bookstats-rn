module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@Application': './src/application/',
            '@Components': './src/components/',
            '@Domain': './src/domain/',
            '@Enums': './src/enums/',
            '@Interfaces': './src/interfaces/',
            '@Lib': './src/lib/',
            '@Models': './src/models/',
            '@Navigation': './src/navigation/',
            '@Services': './src/services/',
            '@Types': './src/types/',
            '@Views': './src/views/',
          },
        },
      ],
    ],
  };
};
