import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { loginAPI, signUpAPI } from './authApi';
// 2 we need to create thunk which call the api

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credential, { rejectWithValue }) => {
    try {
      return await loginAPI(credential);
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  },
);
