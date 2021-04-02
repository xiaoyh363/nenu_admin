import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function getUserPage(page, limit, teacherQuery) {
  return request({
    url: '/vue-admin-template/user/getUserPage',
    method: 'post'
  })
}

export function getLabPage(page, limit, teacherQuery) {
  return request({
    url: '/vue-admin-template/user/getLabPage',
    method: 'post'
  })
}

export function getSensorPage(page, limit, teacherQuery) {
  return request({
    url: '/vue-admin-template/user/getSensorPage',
    method: 'post'
  })
}

export function deleteById() {

}