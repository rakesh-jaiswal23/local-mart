import { createSlice } from '@reduxjs/toolkit';
import { loginUser, checkAuth } from './authThunk';

const initialState = {
  user: null,
  role: null,
  isAuthenticated: false,
  loading: true,
  error: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: () => initialState,

    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state,action) => {
        console.log(action.payload);
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action?.payload);
        state.user = action.payload?.data?.user;
        state.role = action.payload?.data?.user?.role;
        state.isAuthenticated = true;
        state.accessToken = action.payload?.data?.user?.accessToken;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action?.payload);
        state.loading = false;
        state.isAuthenticated = false;
        state.accessToken = null;
        state.error = action.payload?.error || 'Login failed';
      })

      // CHECK AUTH
      .addCase(checkAuth.pending, state => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload?.user;
        state.role = action.payload?.user?.role;
        state.isAuthenticated = true;
        state.accessToken = action.payload?.accessToken || state.accessToken;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.role = null;
        state.accessToken = null;
      });
  },
});

export const { logout, setIsAuthenticated, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
