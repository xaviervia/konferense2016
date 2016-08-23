/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: [
    'code/index',
    'exercise/index',
    'slides/index'
  ],

  javaScript: {
    transpileDependencies: ['@klarna/ui']
  },

  webpack: {
    babel: {
      babelrc: false,
      presets: ['sagui']
    }
  }
}
