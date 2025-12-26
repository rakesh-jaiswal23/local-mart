import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { checkAuthAPI, loginAPI } from './authApi';
// 2 we need to create thunk which call the api

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credential, { rejectWithValue }) => {
    try {
      const res =await loginAPI(credential);
      return res.data
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  },
);

export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
  try {
    return await checkAuthAPI();
  } catch (error) {
    return rejectWithValue(error.response?.data || { message: error.message });
  }
});
