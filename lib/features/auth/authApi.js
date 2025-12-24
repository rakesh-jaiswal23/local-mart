import api from '@/api/axios';
// 1 . auth api
export const loginAPI = async credential => {
  const res = await api.post('/user/login', credential);
  return res.data;
};
// export const signUpAPI = async credential => {
//   const res = await api.post('/user/signup', credential);
//   return res.data;
// };
export const checkAuthAPI = async () => {
  const res = await api.get('/user/me');
  return res.data;
};

// export const login = data => api.post('/user/login', data);
// export const signUp = data => api.post('/user/signup', data);
