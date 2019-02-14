import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function login(params) {
  return request('/rest/s1/user/login', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

export async function logout() {
  return request('/rest/s1/user/logout');
}
