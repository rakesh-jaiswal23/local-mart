'use client';

import { useRef, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../lib/store';
import { checkAuth } from '@/lib/features/auth/authThunk';

function AppBootstrap({ children }) {
  const dispatch = useDispatch();
  const hasCheckedAuth = useRef(false);

  useEffect(() => {
    if (!hasCheckedAuth.current) {
      hasCheckedAuth.current = true;
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return children;
}

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      <AppBootstrap>{children}</AppBootstrap>
    </Provider>
  );
}
