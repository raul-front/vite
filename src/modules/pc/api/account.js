import { _get, _post, _put, _delete } from './request'

const urlPrefix = '/apis/core/v1/'

// 通过邮箱注册
export const register = body => _post(urlPrefix + 'sign_up', body)

// 发送注册验证码
export const sendRegisterCode = body => _post(urlPrefix + 'sign_up_code', body)

// 登录
export const login = body => _post(urlPrefix + 'login', body)

// 获取当前登录账号信息
export const getProfile = _ => _get(urlPrefix + 'profile')
