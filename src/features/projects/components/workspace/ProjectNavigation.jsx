import { NavLink } from "react-router-dom";


const tabs = [
    {
        name: "Overview",
        path: "overview",
    },
    {
        name: "Tasks",
        path: "tasks",
    },
    {
        name: "Team",
        path: "team",
    },
    {
        name: "Timeline",
        path: "timeline",
    },
    {
        name: "Files",
        path: "files",
    },
];


export default function ProjectNavigation({ projectId }) {


    return (

        <div className="flex gap-2 border-b pb-2">


            {tabs.map((tab) => (

                <NavLink

                    key={tab.path}

                    to={`/projects/${projectId}/${tab.path}`}

                    className={({ isActive }) =>
                        isActive
                            ? "bg-neutral-900 text-white px-4 py-2 rounded-md"
                            : "px-4 py-2 rounded-md hover:bg-neutral-100"
                    }

                >

                    {tab.name}

                </NavLink>

            ))}


        </div>

    );

}