const path = require('path')
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // rootValue: 37.5,
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75 // vant的设计是375,我们的设计稿一般是750，需要区分
      },
      // unitPrecision: 5,
      // propList: ['*', '!font-size'],
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2,
      // 排除pc页面
      exclude: new RegExp(`element-plus|${path.join('src', 'modules', 'pc')}`, 'i'),
    },
  },
}
