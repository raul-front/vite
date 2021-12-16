/*
 * @Descripttion: 统一的本地存储
 * @Author: pujianguo
 * @Date: 2021-04-02 14:00:14
 */

const TOKEN = 'admin-token'
const USERINFO = 'admin-userinfo'
const MENUCOLLAPSED = 'admin-menu-collapsed'
const PAGE = 'admin-page'

export default {
  // token
  setToken: token => {
    window.localStorage.setItem(TOKEN, token)
  },
  getToken: () => {
    return window.localStorage.getItem(TOKEN)
  },
  rmToken: () => {
    window.localStorage.removeItem(TOKEN)
  },

  // userinfo
  setUserInfo: info => {
    window.localStorage.setItem(USERINFO, JSON.stringify(info))
  },
  getUserInfo: () => {
    const i = window.localStorage.getItem(USERINFO)
    return i ? JSON.parse(i) : null
  },
  rmUserInfo: () => {
    window.localStorage.removeItem(USERINFO)
  },

  setMenuCollapsed: (payload) => {
    window.localStorage.setItem(MENUCOLLAPSED, payload)
  },
  getMenuCollapsed: () => {
    return window.localStorage.getItem(MENUCOLLAPSED)
  },
  rmMenuCollapsed: () => {
    window.localStorage.removeItem(MENUCOLLAPSED)
  },

  // page
  setPageOption: (page) => {
    window.sessionStorage.setItem(PAGE, JSON.stringify(page))
  },
  getPageOption: () => {
    const p = window.sessionStorage.getItem(PAGE)
    return p ? JSON.parse(p) : null
  },
  rmPageOption: () => {
    window.sessionStorage.removeItem(PAGE)
  },
}
