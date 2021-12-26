const path = require('path')
const isExclude = path.join('src', 'modules', 'pc') // linux系统与windows系统文件夹连接符不同，需要用生成
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
      exclude: isExclude, // 不转换的目录，对于多页面项目，这里区分一下
    },
  },
}
