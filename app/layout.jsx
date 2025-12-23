import { Outfit } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import StoreProvider from '@/app/StoreProvider';
import './globals.css';
import GlobalSkeleton from './GlobalSkeleton';
import AxiosProvider from '@/lib/axiosProvider';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'GoCart. - Shop smarter',
  description: 'GoCart. - Shop smarter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <StoreProvider>
          <AxiosProvider>
            <GlobalSkeleton>
              <Toaster />
              {children}
            </GlobalSkeleton>
          </AxiosProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
