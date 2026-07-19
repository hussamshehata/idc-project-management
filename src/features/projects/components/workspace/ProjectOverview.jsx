import ProjectInfoCard from "./ProjectInfoCard";
import ProjectStatusCard from "./ProjectStatusCard";
import ProjectTeamCard from "./ProjectTeamCard";


export default function ProjectOverview({ project }) {


    return (

        <div className="space-y-6">


            {/*
                Grid layout:

                Left:
                Project information

                Right:
                Status + Team

                We keep this component responsible only
                for arranging the cards.

                The cards themselves handle their own UI.
            */}
            <div className="grid gap-6 md:grid-cols-2">


                <ProjectInfoCard
                    project={project}
                />



                <div className="space-y-6">


                    <ProjectStatusCard
                        project={project}
                    />



                    <ProjectTeamCard
                        project={project}
                    />


                </div>


            </div>


        </div>

    );

}