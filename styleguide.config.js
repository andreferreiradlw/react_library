const path = require('path')
const { version } = require('./package.json')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/components/ThemeProvider'),
  },
  title: 'MaPS React Component Library',
  version,
  styleguideDir: 'dist-docs',
  moduleAliases: {
    '@moneypensionservice/directories': path.resolve(__dirname, 'src'),
  },
  pagePerSection: true,
  exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand' code example
  usageMode: 'expand', // 'hide' | 'collapse' | 'expand' props
  sections: [
    {
      name: 'Documentation',
      content: './src/docs/documentation.md',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand' code example
      usageMode: 'hide', // 'hide' | 'collapse' | 'expand' props
      sections: [
        {
          name: 'Usage',
          content: './src/docs/usage.md',
        },
        {
          name: 'ThemeProvider',
          content: './src/components/ThemeProvider/ThemeProvider.md',
        },
        {
          name: 'Generic Props',
          content: './src/docs/generic_props.md',
        },
      ],
    },
    {
      name: 'Components',
      content: './src/docs/components.md',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      pagePerSection: true,
      sectionDepth: 1,
      sections: [
        {
          name: 'Controls',
          components: () => ['./src/components/Button/index.js'],
        },
        {
          name: 'Typography',
          components: () => ['./src/components/Typography/Headers/index.js'],
        },
      ],
    },
    {
      name: 'Grid',
      content: './src/docs/grid/grid.md',
      pagePerSection: true,
      sectionDepth: 1,
      sections: [
        {
          name: 'Components',
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          components: () => [
            './src/components/Grid/Container/index.js',
            './src/components/Grid/Row/index.js',
            './src/components/Grid/Col/index.js',
          ],
        },
        {
          name: 'Usage',
          content: './src/docs/grid/usage.md',
          sections: [
            {
              name: 'How it works',
              content: './src/docs/grid/how_it_works.md',
            },
            {
              name: 'Grid Options',
              content: './src/docs/grid/grid_options.md',
            },
            {
              name: 'Column Layouts',
              content: './src/docs/grid/column_layouts.md',
            },
            {
              name: 'Responsive Props',
              content: './src/docs/grid/responsive.md',
            },
            {
              name: 'Gutters',
              content: './src/docs/grid/gutters.md',
            },
            {
              name: 'Alignment',
              content: './src/docs/grid/alignment.md',
            },
            {
              name: 'Reordering',
              content: './src/docs/grid/reordering.md',
            },
            {
              name: 'Offsetting Columns',
              content: './src/docs/grid/offsetting.md',
            },
            {
              name: 'Nesting',
              content: './src/docs/grid/nesting.md',
            },
            {
              name: 'Examples',
              content: './src/docs/grid/examples.md',
            },
          ],
        },
      ],
    },
  ],
}
