import api from '@/api/axios';
// 1 . auth api
export const loginAPI = async credential => {
  const res = await api.post('/user/login', credential);
  return res;
};

export const checkAuthAPI = async () => {
  const res = await api.get('/user/me');
  return res.data;
};

