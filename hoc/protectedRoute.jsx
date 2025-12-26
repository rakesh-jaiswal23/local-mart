'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectAuthState, selectIsAuthenticated } from '@/lib/features/auth/authSelector';
import toast from 'react-hot-toast';
import Loading from '@/components/Loading';

const ProtectedRoute = ({ children, allowedrole = [] }) => {
  const router = useRouter();
  const { role, loading } = useSelector(selectAuthState);
  const isLogin = useSelector(selectIsAuthenticated);

 useEffect(() => {
  if (loading) return;

  if (!isLogin) {
    router.replace('/login');
    return;
  }

  if (allowedrole.length && !allowedrole.includes(role)) {
    toast.error('You are unauthorized');
    router.replace('/');
  }
}, [loading, isLogin, role]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (!isLogin) return null;
  if (allowedrole.length && !allowedrole.includes(role)) return null;

  return children;
};

export default ProtectedRoute;
