import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GuestGuard from '../GuestGuard';

export default function SignupPage({ children }) {
  return (
    <>
      <GuestGuard>
        <Navbar />
        {children}
        <Footer />
      </GuestGuard>
    </>
  );
}
