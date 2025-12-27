import StoreLayout from '@/components/store/StoreLayout';
import ProtectedRoute from '@/hoc/protectedRoute';

export const metadata = {
  title: 'Localmart. - Store Dashboard',
  description: 'Localmart. - Store Dashboard',
};

export default function RootAdminLayout({ children }) {
  return (
    <>
      <ProtectedRoute allowedrole={['seller']}>
        <StoreLayout>{children}</StoreLayout>
      </ProtectedRoute>
    </>
  );
}
