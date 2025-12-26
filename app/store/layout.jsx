import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Localmart. - Store Dashboard",
    description: "Localmart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
