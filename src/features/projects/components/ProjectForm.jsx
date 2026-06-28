import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectForm({
                                        formData,
                                        handleChange,
                                        onSubmit,
                                        submitText = "Save",
                                    }) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
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

            <button
                type="submit"
                className="w-full rounded-md bg-black px-4 py-2 text-white"
            >
                {submitText}
            </button>
        </form>
    );
}