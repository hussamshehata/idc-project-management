import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
    {
        id: 1,
        name: "Villa A12",
        client: "Ahmed Hassan",
        status: "In Progress",
        phase: "Concept Design",
        deadline: "2026-07-15",
    },
    {
        id: 2,
        name: "Canele Cafe",
        client: "Leven Square",
        status: "Review",
        phase: "3D Render",
        deadline: "2026-07-22",
    },
    {
        id: 3,
        name: "Office Renovation",
        client: "IDC Internal",
        status: "Waiting Approval",
        phase: "Shop Drawings",
        deadline: "2026-08-01",
    },
];

export default function Projects() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-950">Projects</h1>
                    <p className="text-sm text-neutral-500">
                        Manage interior design projects, phases, and delivery status.
                    </p>
                </div>

                <Button>
                    <Plus size={18} />
                    Create Project
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">Total Projects</p>
                        <h2 className="mt-2 text-3xl font-bold">3</h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">In Progress</p>
                        <h2 className="mt-2 text-3xl font-bold">1</h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">Waiting Approval</p>
                        <h2 className="mt-2 text-3xl font-bold">1</h2>
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
                            <div className="font-medium text-neutral-950">{project.name}</div>
                            <div className="text-neutral-500">{project.client}</div>
                            <div className="text-neutral-500">{project.phase}</div>
                            <div>
                                <Badge variant="secondary">{project.status}</Badge>
                            </div>
                            <div className="text-neutral-500">{project.deadline}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}