import { NavLink } from "react-router-dom";

// Navigation tabs inside a project
const tabs = [
    {
        name: "Overview",
        path: "overview",
    },
    {
        name: "Phases",
        path: "phases",
    },
    {
        name: "Team",
        path: "team",
    },
    {
        name: "Files",
        path: "files",
    },
];

export default function ProjectNavigation({ projectId }) {
    return (
        <div className="flex gap-2 border-b pb-2">

            {/* Create one navigation link for each tab */}
            {tabs.map((tab) => (
                <NavLink
                    key={tab.path}
                    to={`/projects/${projectId}/${tab.path}`}
                    className={({ isActive }) =>
                        isActive
                            ? "rounded-md bg-neutral-900 px-4 py-2 text-white"
                            : "rounded-md px-4 py-2 hover:bg-neutral-100"
                    }
                >
                    {tab.name}
                </NavLink>
            ))}

        </div>
    );
}