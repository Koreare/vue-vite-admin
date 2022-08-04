/***
 * 首页接口
 */
import request from './request/index'


export function upLoad(data) {
  return request({
    url: '/api/uploadImage',
    method: 'post',
    data
  })
}
