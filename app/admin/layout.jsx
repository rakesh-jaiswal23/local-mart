import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Localmart. - Admin",
    description: "Localmart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
