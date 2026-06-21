import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard";

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}