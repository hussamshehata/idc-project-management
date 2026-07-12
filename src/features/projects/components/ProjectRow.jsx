import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";


export default function ProjectRow({ project }) {

    return (

        <div
            className="
                grid
                grid-cols-5
                items-center
                gap-4
                px-6
                py-4
                text-sm
            "
        >


            {/*
                Project name is a link.

                Clicking it opens:
                /projects/:id

                Example:
                /projects/1
            */}
            <Link
                to={`/projects/${project.id}`}
                className="
                    font-medium
                    text-neutral-950
                    hover:underline
                "
            >
                {project.name}
            </Link>



            {/* Client name */}
            <div className="text-neutral-500">

                {project.clientName}

            </div>



            {/* Project type */}
            <div className="text-neutral-500">

                {project.projectType}

            </div>




            {/* Status badge */}
            <div>

                <Badge variant="secondary">

                    {project.status}

                </Badge>

            </div>




            {/* Target delivery date */}
            <div className="text-neutral-500">

                {project.targetEndDate}

            </div>


        </div>

    );
}