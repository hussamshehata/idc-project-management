// Page that displays all phases of a project

import { useParams } from "react-router-dom";

import ProjectPhases from "../components/ProjectPhases";


export default function ProjectPhasesPage() {

    // Get project id from URL
    const { id } = useParams();


    return (

        <ProjectPhases
            projectId={Number(id)}
        />

    );

}