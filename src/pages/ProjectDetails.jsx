import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { initialProjects } from "@/features/projects/data/mockProjects";

export default function ProjectDetails() {
    const { id } = useParams();

    const project = initialProjects.find(
        (project) => project.id === Number(id)
    );

    if (!project) {
        return <h1 className="text-3xl font-bold">Project not found</h1>;
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-neutral-950">
                    {project.name}
                </h1>
                <p className="text-sm text-neutral-500">
                    {project.clientName} • {project.location}
                </p>
            </div>

            <Card>
                <CardContent className="grid gap-4 p-6 md:grid-cols-2">
                    <div>
                        <p className="text-sm text-neutral-500">Client</p>
                        <p className="font-medium">{project.clientName}</p>
                    </div>

                    <div>
                        <p className="text-sm text-neutral-500">Project Type</p>
                        <p className="font-medium">{project.projectType}</p>
                    </div>

                    <div>
                        <p className="text-sm text-neutral-500">Status</p>
                        <Badge variant="secondary">{project.status}</Badge>
                    </div>

                    <div>
                        <p className="text-sm text-neutral-500">Project Manager</p>
                        <p className="font-medium">{project.projectManager}</p>
                    </div>

                    <div>
                        <p className="text-sm text-neutral-500">Start Date</p>
                        <p className="font-medium">{project.startDate}</p>
                    </div>

                    <div>
                        <p className="text-sm text-neutral-500">Target End Date</p>
                        <p className="font-medium">{project.targetEndDate}</p>
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-sm text-neutral-500">Description</p>
                        <p className="font-medium">{project.description}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}