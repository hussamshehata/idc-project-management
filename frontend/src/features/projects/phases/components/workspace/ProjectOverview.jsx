import ProjectInfoCard from "./ProjectInfoCard.jsx";
import ProjectStatusCard from "./ProjectStatusCard.jsx";
import ProjectTeamCard from "./ProjectTeamCard.jsx";

// Import the new Project Phases section
import ProjectPhases from "@/features/projects/phases/components/ProjectPhases.jsx";

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