import Sidebar from "@/layouts/Sidebar.jsx";
import Header from "@/layouts/Header.jsx";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-neutral-50">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />

                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}