// 3. we create a slice with initial value and reducer

import { Phone } from 'lucide-react';
import { email } from 'zod';

const { createSlice } = require('@reduxjs/toolkit');
const { loginUser } = require('./authThunk');
const { act } = require('react');

// 1. create a initialstate
const initialState = {
  role: null,
  name: null,
  email: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  //    work for sync state
  reducers: {
    resetAuth: state => {
      ((state.name = null),
        (state.email = null),
        (state.name = null)((state.error = null)),
        (state.status = 'idle'));
    },
  },
  //   work for async state (state - curent value )
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      ((state.status = 'loading'), (state.error = null));
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      ((state.status = 'success'), (state.user = action.payload.user));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      ((state.status = 'failed'), (state.error = action?.payload?.error || 'Login failed'));
    });
  },
});
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
