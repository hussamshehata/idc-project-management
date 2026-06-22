import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

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

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <Input
                        name="name"
                        placeholder="Project Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <Input
                        name="clientName"
                        placeholder="Client Name"
                        value={formData.clientName}
                        onChange={handleChange}
                    />

                    <Input
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <Input
                        name="projectType"
                        placeholder="Project Type"
                        value={formData.projectType}
                        onChange={handleChange}
                    />

                    <Textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Save Project
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}