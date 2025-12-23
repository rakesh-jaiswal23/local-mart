import api from '@/api/axios';

const login = data => api.post('/user/login', data);
const signUp = data => api.post('/user/signup');
