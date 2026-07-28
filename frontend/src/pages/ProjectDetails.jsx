
import { useParams } from "react-router-dom";

import { useProjects } from "@/context/ProjectsContext.jsx";

import ProjectHeader from "@/features/projects/phases/components/workspace/ ProjectHeader.jsx";
import ProjectNavigation from "@/features/projects/phases/components/workspace/ProjectNavigation.jsx";
import ProjectOverview from "@/features/projects/phases/components/workspace/ProjectOverview.jsx";



export default function ProjectDetails() {


    /*
        Get project id from URL.

        Example:

        /projects/1

        id = 1
    */
    const { id } = useParams();




    /*
        Get projects from Context.

        Later this will be replaced with
        React Query + Backend API.

        For now Context is our data source.
    */
    const { projects } = useProjects();





    /*
        Find the selected project.

        URL gives us a string:
        "1"

        Our data uses numbers:
        1

        So we convert using Number().
    */
    const project = projects.find(
        (project) =>
            project.id === Number(id)
    );






    /*
        If the project does not exist,
        show an error message.

        Example:

        User opens:
        /projects/999
    */
    if (!project) {

        return (

            <h1 className="text-3xl font-bold">

                Project not found

            </h1>

        );

    }







    return (

        <div className="space-y-6">



            {/*
                Top section:

                Name
                Client
                Status
                Edit/Delete buttons
            */}
            <ProjectHeader
                project={project}
            />





            {/*
                Navigation tabs:

                Overview
                Tasks
                Team
                Timeline
                Files

                For now only UI.
            */}
            <ProjectNavigation projectId={project.id} />






            {/*
                Main workspace content.

                Later:

                Tasks tab
                Files tab
                Team tab

                will replace this area.
            */}
            <ProjectOverview
                project={project}
            />



        </div>

    );

}