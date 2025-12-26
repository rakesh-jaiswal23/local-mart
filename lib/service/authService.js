import api from '@/api/axios';

// export const login = data => api.post('/user/login', data);
export const signUp = data => api.post('/user/signup', data);
export const logout = () => api.post('/user/logout');
