/*
 * @Descripttion: 公共方法
 * @Author: pujianguo
 * @Date: 2021-06-06 11:41:44
 */

export const validateFields = (formRef, fields) => {
  let count = 0
  formRef.value.validateField(fields, c => {
    if (!c) {
      count++
    }
  })
  if (count === fields.length) {
    return true
  }
  return false
}
