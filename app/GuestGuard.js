// app/login/GuestGuard.js
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectAuthState } from '@/lib/features/auth/authSelector';
import Loading from '@/components/Loading';

export default function GuestGuard({ children }) {
  const router = useRouter();
  const { accessToken, role, loading } = useSelector(selectAuthState);

  useEffect(() => {
    if (loading) return;

    if (accessToken) {
      if (role === 'admin') router.replace('/admin');
      else if (role === 'seller') router.replace('/store');
      else router.replace('/');
    }
  }, [accessToken, role, loading, router]);

  if (loading) return <Loading />;
  if (accessToken) return null;

  return <>{children}</>;
}
