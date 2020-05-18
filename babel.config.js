// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          /*           browsers: [
            'last 2 versions',
            'Safari >= 10',
            'iOS >= 10',
            'not ie <= 10',
            '> 1%',
          ], */
          esmodules: true,
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ];
  const plugins = [
    'emotion',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    '@loadable/babel-plugin',
    /*     ['babel-plugin-jsx-remove-data-test-id', {
      attributes: [
        'data-test-id',
        'test-id',
      ],
    }], */
  ];

  return {
    presets,
    plugins,
  };
};
