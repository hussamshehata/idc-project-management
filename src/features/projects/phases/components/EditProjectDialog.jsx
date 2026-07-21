import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog.jsx";

import { Button } from "@/components/ui/button.jsx";

import ProjectForm from "./ProjectForm.jsx";
import { useProjects } from "@/context/ProjectsContext.jsx";

export default function EditProjectDialog({ project }) {
    const { updateProject } = useProjects();

    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        ...project,
    });

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        updateProject(project.id, formData);

        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Edit Project</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Project</DialogTitle>
                </DialogHeader>

                <ProjectForm
                    formData={formData}
                    handleChange={handleChange}
                    onSubmit={handleSubmit}
                    submitText="Save Changes"
                />
            </DialogContent>
        </Dialog>
    );
}