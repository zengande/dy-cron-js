export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'dycron',
    globals: {
      react: 'React',
    },
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
