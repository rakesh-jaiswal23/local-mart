import { createSlice } from '@reduxjs/toolkit';
import { loginUser, checkAuth } from './authThunk';

const initialState = {
  user: null,
  role: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: state => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    }
  },

  extraReducers: builder => {
    // LOGIN
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload?.user;
        state.role = action.payload?.user?.role;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Login failed';
      })

      // CHECK AUTH
      .addCase(checkAuth.pending, state => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload?.user;
        state.role = action.payload?.role;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, state => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { logout, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
