'use client';

import api from '@/api/axios';
import refreshApi from '@/api/refreshApi';
import { store } from '@/lib/store';
import { logout, setAccessToken } from '@/lib/features/auth/authSlice';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(({ resolve, reject, config }) => {
    if (error) {
      reject(error);
    } else {
      config.headers.Authorization = `Bearer ${token}`;
      resolve(api(config));
    }
  });
  failedQueue = [];
};

/**
 * REQUEST INTERCEPTOR
 */
api.interceptors.request.use(
  config => {
    const token = store.getState().auth.accessToken;

    if (token && !config.url?.includes('/user/refreshToken')) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

/**
 * RESPONSE INTERCEPTOR
 */
api.interceptors.response.use(
  response => response,

  async error => {
    const originalRequest = error.config;

    //  Never retry refresh endpoint
    if (originalRequest?.url?.includes('/user/refreshToken')) {
      store.dispatch(logout());
      return Promise.reject(error.response || error);
    }

    const accessToken = store.getState().auth.accessToken;
    console.log(accessToken)

    // //  No token → just logout
    // if (!accessToken) {
    //   store.dispatch(logout());
    //   return Promise.reject(error);
    // }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        });
      }

      isRefreshing = true;

      try {
        const res = await refreshApi.post('/user/refreshToken');
        const newToken = res.data?.accessToken;

        if (!newToken) throw new Error('Refresh failed');

        store.dispatch(setAccessToken(newToken));
        processQueue(null, newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);

      } catch (err) {
        processQueue(err);
        store.dispatch(logout());
        return Promise.reject(err);

      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error.response || error);
  }
);

