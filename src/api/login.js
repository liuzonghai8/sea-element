//import request from '@/utils/request'

export function login (username, password) {
  return axios.request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo (token) {
  return axios.request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return axios.request({
    url: '/user/logout',
    method: 'post'
  })
}
