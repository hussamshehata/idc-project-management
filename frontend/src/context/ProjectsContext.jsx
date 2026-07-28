import { createContext, useContext, useState } from "react";
import { initialProjects } from "@/features/projects/phases/data/mockProjects.js";

const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState(initialProjects);

    function addProject(project) {
        setProjects((prev) => [...prev, project]);
    }

    function updateProject(id, updatedProject) {
        setProjects((prev) =>
            prev.map((project) =>
                project.id === id ? { ...project, ...updatedProject } : project
            )
        );
    }

    function deleteProject(id) {
        setProjects((prev) => prev.filter((project) => project.id !== id));
    }

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                addProject,
                updateProject,
                deleteProject,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}

export function useProjects() {
    return useContext(ProjectsContext);
}