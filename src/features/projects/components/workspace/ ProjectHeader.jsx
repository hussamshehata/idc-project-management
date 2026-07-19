import { Badge } from "@/components/ui/badge";

import EditProjectDialog from "@/features/projects/components/EditProjectDialog";
import DeleteProjectDialog from "@/features/projects/components/DeleteProjectDialog";


export default function ProjectHeader({ project }) {


    return (

        <div className="flex items-center justify-between">


            {/*
                Left side:
                Project main information

                This component only displays data.
                It does not fetch projects.
                The parent sends the project using props.
            */}
            <div>


                <h1 className="text-3xl font-bold">
                    {project.name}
                </h1>



                <p className="text-neutral-500">

                    {project.clientName}
                    {" • "}
                    {project.location}

                </p>



                <div className="mt-3">

                    <Badge>
                        {project.status}
                    </Badge>

                </div>


            </div>




            {/*
                Right side:
                Project actions

                These are reusable components
                that we already built before.
            */}
            <div className="flex gap-2">


                <EditProjectDialog
                    project={project}
                />



                <DeleteProjectDialog
                    project={project}
                />


            </div>


        </div>

    );

}