import api from '@/api/axios';

// export const login = data => api.post('/user/login', data);
export const signUp = data => api.post('/user/signup', data);
export const logout = () => api.post('/user/logout');
export const sellerRequest = data => api.post('/seller/request', data);
export const getsellerRequest = () => api.get('/admin/seller-requests');
export const getsellerApproved = () => api.get('/admin/approved-sellers');
export const approveSellerRequest = id => api.patch(`/admin/seller-requests/${id}/approve`);
export const rejectSellerRequest = id => api.patch(`/admin/seller-requests/${id}/reject`);
export const toggleSellerRequest = id => api.patch(`/admin/sellers/${id}/toggle`);
