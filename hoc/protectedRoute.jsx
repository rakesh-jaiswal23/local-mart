'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectAuthState } from '@/lib/features/auth/authSelector';

const ProtectedRoute = ({ children, allowedrole = [] }) => {
  const router = useRouter();
  const {  role, loading } = useSelector(selectAuthState);
const isLogin = useSelector(selectAuthState)

  useEffect(() => {
    if (loading) return; 

    // Not logged in
    if (!isLogin) {
      router.replace('/login');
      return;
    }

    //  Role not allowed
    if (allowedrole.length && !allowedrole.includes(role)) {
      router.replace('/unauthorized');
    }
  }, [isLogin, role, loading, allowedrole, router]);

  //  Prevent flicker
  if (loading) return null;

  //  Extra safety
  if (!isLogin) return null;

  if (allowedrole.length && !allowedrole.includes(role)) return null;

  return children;
};

export default ProtectedRoute;
