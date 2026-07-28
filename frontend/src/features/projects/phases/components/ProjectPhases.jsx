// Import mock data
import { initialPhases } from "../data/initialPhases.js";

// Import the reusable list component
import PhaseList from "./PhaseList.jsx";


export default function ProjectPhases({ projectId }) {

    /*
        Get only the phases that belong
        to the selected project.

        Example:

        Project ID = 1

        Only return phases where:

        phase.projectId === 1
    */
    const projectPhases = initialPhases.filter(
        (phase) => phase.projectId === projectId
    );



    return (

        <div className="space-y-6">

            {/* Section title */}
            <div>

                <h2 className="text-2xl font-bold">
                    Project Phases
                </h2>

                <p className="text-sm text-neutral-500">
                    Manage the project workflow through design phases.
                </p>

            </div>


            {/* Display all project phases */}
            <PhaseList
                phases={projectPhases}
            />

        </div>

    );

}