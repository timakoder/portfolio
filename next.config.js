const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  postcssLoaderOptions: { parser: 'postcss-scss', autoprefixer: true }
})