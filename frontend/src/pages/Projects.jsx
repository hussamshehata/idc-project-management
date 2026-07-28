import { useState } from "react";

import CreateProjectDialog from "@/features/projects/phases/components/CreateProjectDialog.jsx";
import ProjectFilters from "@/features/projects/phases/components/ProjectFilters.jsx";
import ProjectStats from "@/features/projects/phases/components/ProjectStats.jsx";
import ProjectTable from "@/features/projects/phases/components/ProjectTable.jsx";

import { useProjects } from "@/context/ProjectsContext.jsx";


export default function Projects() {


    // Get projects data from global Context
    const { projects, addProject } = useProjects();



    // Search text entered by the user
    const [search, setSearch] = useState("");



    // Selected status filter
    const [statusFilter, setStatusFilter] = useState("All");



    // Selected project type filter
    const [projectTypeFilter, setProjectTypeFilter] = useState("All");




    /*
        Derived state.

        We do not store filtered projects.

        Why?

        Because filteredProjects depends on:
        - projects
        - search
        - filters

        React can calculate it whenever these values change.
    */
    const filteredProjects = projects.filter((project) => {


        const term = search
            .trim()
            .toLowerCase();



        const matchesSearch =
            project.name
                .toLowerCase()
                .includes(term)
            ||
            project.clientName
                .toLowerCase()
                .includes(term);




        const matchesStatus =
            statusFilter === "All"
            ||
            project.status === statusFilter;




        const matchesType =
            projectTypeFilter === "All"
            ||
            project.projectType === projectTypeFilter;



        return (
            matchesSearch &&
            matchesStatus &&
            matchesType
        );

    });




    return (

        <div className="space-y-6">



            {/* Page Header */}
            <div className="flex items-center justify-between">


                <div>

                    <h1 className="text-3xl font-bold text-neutral-950">
                        Projects
                    </h1>


                    <p className="text-sm text-neutral-500">
                        Manage interior design projects, phases, and delivery status.
                    </p>


                </div>




                {/* Create new project */}
                <CreateProjectDialog
                    onCreate={addProject}
                />


            </div>





            {/* Search and Filters */}
            <ProjectFilters

                search={search}

                setSearch={setSearch}

                statusFilter={statusFilter}

                setStatusFilter={setStatusFilter}

                projectTypeFilter={projectTypeFilter}

                setProjectTypeFilter={setProjectTypeFilter}

            />







            {/* Project Statistics */}

            <ProjectStats

                projects={filteredProjects}

            />







            {/* Project List */}

            <ProjectTable

                projects={filteredProjects}

            />



        </div>

    );

}