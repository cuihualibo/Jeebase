import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/organization/tree',
    method: 'get',
    params: data
  })
}

export function createOrganization(data) {
  return request({
    url: '/organization/create',
    method: 'post',
    data
  })
}

export function updateOrganization(data) {
  return request({
    url: '/organization/update',
    method: 'post',
    data
  })
}

export function deleteOrganization(id) {
  return request({
    url: '/organization/delete/' + id,
    method: 'post'
  })
}