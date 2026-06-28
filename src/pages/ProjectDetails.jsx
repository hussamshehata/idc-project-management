import { useParams } from "react-router-dom";

import { useProjects } from "@/context/ProjectsContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectDetails() {
    const { id } = useParams();
    const { projects } = useProjects();

    const project = projects.find(
        (project) => project.id === Number(id)
    );

    if (!project) {
        return (
            <h1 className="text-3xl font-bold">
                Project not found
            </h1>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">{project.name}</h1>
                <p className="text-neutral-500">
                    {project.clientName} • {project.location}
                </p>
            </div>

            <Card>
                <CardContent className="space-y-4 p-6">
                    <div>
                        <p className="text-sm text-neutral-500">Project Type</p>
                        <p>{project.projectType}</p>
                    </div>

                    <div>
                        <p className="text-sm text-neutral-500">Status</p>
                        <Badge>{project.status}</Badge>
                    </div>

                    <div>
                        <p className="text-sm text-neutral-500">Project Manager</p>
                        <p>{project.projectManager}</p>
                    </div>

                    <div>
                        <p className="text-sm text-neutral-500">Description</p>
                        <p>{project.description}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}