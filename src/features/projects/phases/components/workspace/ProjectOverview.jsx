import ProjectInfoCard from "./ProjectInfoCard";
import ProjectStatusCard from "./ProjectStatusCard";
import ProjectTeamCard from "./ProjectTeamCard";

// Import the new Project Phases section
import ProjectPhases from "@/features/projects/phases/components/ProjectPhases";

export default function ProjectOverview({ project }) {

    return (

        <div className="space-y-8">

            {/* ================= Project Information ================= */}

            <div className="grid gap-6 lg:grid-cols-2">

                {/* Left Side */}
                <ProjectInfoCard
                    project={project}
                />

                {/* Right Side */}
                <div className="space-y-6">

                    <ProjectStatusCard
                        project={project}
                    />

                    <ProjectTeamCard
                        project={project}
                    />

                </div>

            </div>


            {/* ================= Project Phases ================= */}

            <ProjectPhases
                projectId={project.id}
            />

        </div>

    );

}