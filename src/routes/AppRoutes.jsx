import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import Tasks from "@/pages/Tasks";
import TimeTracking from "@/pages/TimeTracking";
import Reports from "@/pages/Reports";
import Settings from "@/pages/Settings";
import Dashboard from "@/pages/Dashboard";
import Projects from "@/pages/Projects";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<DashboardLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/time-tracking" element={<TimeTracking />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}