import { createSelector } from '@reduxjs/toolkit';

export const selectIsAuthenticated = state => state.auth.isAuthenticated;

// Proper memoized selector
export const selectAuthState = createSelector(
  state => state.auth.user,
  state => state.auth.role,
  state => state.auth.error,
  state => state.auth.loading,
  (user, role, error, loading) => ({
    user,
    role,
    error,
    loading,
  }),
);
