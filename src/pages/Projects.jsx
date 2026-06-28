
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CreateProjectDialog from "@/features/projects/components/CreateProjectDialog";

import { useProjects } from "@/context/ProjectsContext";
export default function Projects() {
const { projects, addProject } = useProjects();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-950">Projects</h1>
                    <p className="text-sm text-neutral-500">
                        Manage interior design projects, phases, and delivery status.
                    </p>
                </div>

                <CreateProjectDialog onCreate={addProject} />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">Total Projects</p>
                        <h2 className="mt-2 text-3xl font-bold">{projects.length}</h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">In Progress</p>
                        <h2 className="mt-2 text-3xl font-bold">
                            {projects.filter((project) => project.status === "In Progress").length}
                        </h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">Waiting Approval</p>
                        <h2 className="mt-2 text-3xl font-bold">
                            {projects.filter((project) => project.status === "Waiting Approval").length}
                        </h2>
                    </CardContent>
                </Card>
            </div>

            <div className="rounded-2xl border bg-white">
                <div className="border-b px-6 py-4">
                    <h2 className="font-semibold">Project List</h2>
                </div>

                <div className="divide-y">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="grid grid-cols-5 items-center gap-4 px-6 py-4 text-sm"
                        >
                            <Link
                                to={`/projects/${project.id}`}
                                className="font-medium text-neutral-950 hover:underline"
                            >
                                {project.name}
                            </Link>

                            <div className="text-neutral-500">{project.clientName}</div>
                            <div className="text-neutral-500">{project.projectType}</div>

                            <div>
                                <Badge variant="secondary">{project.status}</Badge>
                            </div>

                            <div className="text-neutral-500">{project.targetEndDate}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}