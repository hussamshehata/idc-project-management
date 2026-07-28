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

export default function CreateProjectDialog({ onCreate }) {
    const [formData, setFormData] = useState({
        name: "",
        clientName: "",
        location: "",
        projectType: "",
        status: "Planning",
        description: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        onCreate({
            id: Date.now(),
            ...formData,
        });

        setFormData({
            name: "",
            clientName: "",
            location: "",
            projectType: "",
            status: "Planning",
            description: "",
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Project</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Project</DialogTitle>
                </DialogHeader>

                <ProjectForm
                    formData={formData}
                    handleChange={handleChange}
                    onSubmit={handleSubmit}
                    submitText="Create Project"
                />
            </DialogContent>
        </Dialog>
    );
}