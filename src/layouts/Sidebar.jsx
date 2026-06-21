import {
    LayoutDashboard,
    FolderKanban,
    CheckSquare,
    Timer,
    BarChart3,
    Settings,
} from "lucide-react";

const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Projects", icon: FolderKanban },
    { label: "Tasks", icon: CheckSquare },
    { label: "Time Tracking", icon: Timer },
    { label: "Reports", icon: BarChart3 },
    { label: "Settings", icon: Settings },
];

export default function Sidebar() {
    return (
        <aside className="w-72 min-h-screen border-r bg-white px-4 py-5">
            <h1 className="mb-8 px-3 text-xl font-bold text-neutral-950">
                IDC PM
            </h1>

            <nav className="space-y-1">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.label}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                index === 0
                                    ? "bg-neutral-100 text-neutral-950"
                                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                            }`}
                        >
                            <Icon size={19} strokeWidth={1.8} />
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
}