/*
 * @Descripttion: config
 * @Author: pujianguo
 * @Date: 2021-12-24 23:12:59
 */
const ENV = import.meta.env

// development version
const development = {
  env: 'dev',
  // baseUrl: 'https://dev-api.xxx.com',
  baseUrl: 'devApi',
  debug: true,
}
// test version
const test = {
  env: 'test',
  baseUrl: 'https://test-api.xxx.com',
  debug: true,
}
// pre version
const pre = {
  env: 'pre',
  baseUrl: 'https://pre-api.xxx.com',
  debug: true,
}
// release version
const production = {
  env: 'production',
  baseUrl: 'https://api.xxx.com',
  debug: false,
}

const common = {
  envData: ENV,
  defaultAvatar: '/images/avatar.png',
}

let config = {}
if (ENV.MODE === 'production') {
  config = Object.assign({}, common, production)
} else if (ENV.MODE === 'pre') {
  config = Object.assign({}, common, pre)
} else if (ENV.MODE === 'test') {
  config = Object.assign({}, common, test)
} else {
  config = Object.assign({}, common, development)
}

export default config
