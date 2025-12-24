import api from "@/api/axios";
import {makeStore} from "@/lib/store"
import { logout } from "@/lib/features/auth/authSlice";
 
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => {
  failedQueue.forEach(({ resolve, reject }) => {
    error ? reject(error) : resolve();
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => api(originalRequest));
      }

      isRefreshing = true;

      try {
        await api.post("/user/refreshToken");
        processQueue(null);
        return api(originalRequest);
      } catch (err) {
        processQueue(err);

        makeStore.dispatch(logout());
        window.location.replace("/login");

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
