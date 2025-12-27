import { Outfit } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import StoreProvider from '@/app/StoreProvider';
import './globals.css';
import GlobalSkeleton from './GlobalSkeleton';
import AxiosProvider from '@/lib/axiosProvider';


const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'Localmart. - Shop smarter',
  description: 'Localmart. - Shop smarter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <StoreProvider>
          <AxiosProvider>
            <GlobalSkeleton>
              <Toaster
                toastOptions={{
                  duration: 3000,
                }}
              />
             {children}
            </GlobalSkeleton>
          </AxiosProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
