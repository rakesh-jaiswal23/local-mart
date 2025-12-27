import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SignupPage({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
