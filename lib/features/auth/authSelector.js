import { createSelector } from '@reduxjs/toolkit';
//  momoized selector , prevent from re-render
export const selectAuthState = createSelector(
  [
    state => state.auth.name,
    state => state.auth.email,
    state => state.auth.role,
    state => state.auth.status,
    state => state.auth.error,
  ],
  (name, email, role, status, error) => ({
    name,
    email,
    role,
    status,
    error,
  }),
);
