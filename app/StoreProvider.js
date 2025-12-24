'use client';

import { useRef, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { makeStore } from '../lib/store';
import { checkAuth } from '@/lib/features/auth/authThunk';

function AppBootstrap({ children }) {
  const dispatch = useDispatch();
  // AppBootstrap initialize the data once when the window reload
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return children;
}

export default function StoreProvider({ children }) {
  const storeRef = useRef(); // it is a container

  if (!storeRef.current) {
    storeRef.current = makeStore(); // store the redux-store in container
  }

  return (
    <Provider store={storeRef.current}>
      <AppBootstrap>{children}</AppBootstrap>
    </Provider>
  );
}
