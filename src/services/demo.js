import request from '@/utils/request';

export function postApi(data) {
  return request.post('/api/post', { data });
}
