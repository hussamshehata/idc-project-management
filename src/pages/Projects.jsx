import { useState } from "react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import CreateProjectDialog from "@/features/projects/components/CreateProjectDialog";
import { useProjects } from "@/context/ProjectsContext";

export default function Projects() {
    // Get shared projects data and CRUD functions from Context
    const { projects, addProject } = useProjects();

    // Stores what the user types in the search input
    const [search, setSearch] = useState("");

    // Stores the selected project status
    const [statusFilter, setStatusFilter] = useState("All");

    // Stores the selected project type
    const [projectTypeFilter, setProjectTypeFilter] = useState("All");

    // Create a filtered copy of the projects array
    const filteredProjects = projects.filter((project) => {
        // Remove spaces and make search case-insensitive
        const term = search.trim().toLowerCase();

        // Search by project name or client name
        const matchesSearch =
            project.name.toLowerCase().includes(term) ||
            project.clientName.toLowerCase().includes(term);

        // Filter by status
        const matchesStatus =
            statusFilter === "All" ||
            project.status === statusFilter;

        // Filter by project type
        const matchesProjectType =
            projectTypeFilter === "All" ||
            project.projectType === projectTypeFilter;

        return (
            matchesSearch &&
            matchesStatus &&
            matchesProjectType
        );
    });

    return (
        <div className="space-y-6">

            {/* ================= HEADER ================= */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-950">
                        Projects
                    </h1>

                    <p className="text-sm text-neutral-500">
                        Manage interior design projects, phases, and delivery status.
                    </p>
                </div>

                <CreateProjectDialog onCreate={addProject} />
            </div>

            {/* ================= SEARCH & FILTER ================= */}
            <div className="flex gap-4">
                {/* Search */}
                <Input
                    className="max-w-sm"
                    placeholder="Search projects or clients..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Status Filter */}
                <Select
                    value={statusFilter}
                    onValueChange={setStatusFilter}
                >
                    <SelectTrigger className="w-56">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="All">All Stages</SelectItem>
                        <SelectItem value="Planning">Planning</SelectItem>
                        <SelectItem value="Concept Design">Concept Design</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Waiting Approval">Waiting Approval</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                </Select>

                {/* Project Type Filter */}
                <Select
                    value={projectTypeFilter}
                    onValueChange={setProjectTypeFilter}
                >
                    <SelectTrigger className="w-56">
                        <SelectValue placeholder="Project Type" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="All">All Types</SelectItem>
                        <SelectItem value="Residential">Residential</SelectItem>
                        <SelectItem value="Commercial">Commercial</SelectItem>
                        <SelectItem value="Office">Office</SelectItem>
                        <SelectItem value="Hospitality">Hospitality</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Retail">Retail</SelectItem>
                        <SelectItem value="Landscape">Landscape</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* ================= PROJECT STATISTICS ================= */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">
                            Total Projects
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {filteredProjects.length}
                        </h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">
                            In Progress
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {
                                filteredProjects.filter(
                                    (project) =>
                                        project.status === "In Progress"
                                ).length
                            }
                        </h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <p className="text-sm text-neutral-500">
                            Waiting Approval
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {
                                filteredProjects.filter(
                                    (project) =>
                                        project.status === "Waiting Approval"
                                ).length
                            }
                        </h2>
                    </CardContent>
                </Card>
            </div>

            {/* ================= PROJECT LIST ================= */}
            <div className="rounded-2xl border bg-white">
                <div className="border-b px-6 py-4">
                    <h2 className="font-semibold">
                        Project List
                    </h2>
                </div>

                {filteredProjects.length === 0 ? (
                    <div className="p-8 text-center text-neutral-500">
                        No projects found.
                    </div>
                ) : (
                    <div className="divide-y">
                        {filteredProjects.map((project) => (
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

                                <div className="text-neutral-500">
                                    {project.clientName}
                                </div>

                                <div className="text-neutral-500">
                                    {project.projectType}
                                </div>

                                <div>
                                    <Badge variant="secondary">
                                        {project.status}
                                    </Badge>
                                </div>

                                <div className="text-neutral-500">
                                    {project.targetEndDate}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}