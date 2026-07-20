import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    FolderKanban,
    CheckSquare,
    Timer,
    BarChart3,
    Settings,
} from "lucide-react";

const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    { label: "Projects", icon: FolderKanban, path: "/projects" },
    { label: "Tasks", icon: CheckSquare, path: "/tasks" },
    { label: "Time Tracking", icon: Timer, path: "/time-tracking" },
    { label: "Reports", icon: BarChart3, path: "/reports" },
    { label: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
    return (
        <aside className="w-72 min-h-screen border-r bg-white px-4 py-5">
            <h1 className="mb-8 px-3 text-xl font-bold text-neutral-950">
                IDC PM
            </h1>

            <nav className="space-y-1">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                    isActive
                                        ? "bg-neutral-100 text-neutral-950"
                                        : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                                }`
                            }
                        >
                            <Icon size={19} strokeWidth={1.8} />
                            {item.label}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}