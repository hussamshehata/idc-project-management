import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout.jsx";
import Tasks from "@/pages/Tasks.jsx";
import TimeTracking from "@/pages/TimeTracking.jsx";
import Reports from "@/pages/Reports.jsx";
import Settings from "@/pages/Settings.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import Projects from "@/pages/Projects.jsx";
import ProjectDetails from "@/pages/ProjectDetails.jsx";
import ProjectPhases from "@/features/projects/phases/components/ProjectPhases.jsx";
export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<DashboardLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/projects/:id/phases" element={<ProjectPhases />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/time-tracking" element={<TimeTracking />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />

            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}