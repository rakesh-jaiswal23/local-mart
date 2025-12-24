import AdminLayout from "@/components/admin/AdminLayout";
import ProtectedRoute from "@/hoc/protectedRoute";

export const metadata = {
    title: "Localmart. - Admin",
    description: "Localmart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
         <ProtectedRoute allowedrole={['admin']}>
            <AdminLayout>
                {children}
            </AdminLayout>
            </ProtectedRoute>
        </>
    );
}
