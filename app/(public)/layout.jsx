'use client';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/hoc/protectedRoute';

export default function PublicLayout({ children }) {
  return (
    <>
      <ProtectedRoute allowedrole={['user']}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </ProtectedRoute>
    </>
  );
}
