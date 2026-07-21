import { useParams } from "react-router-dom";
import { initialPhases } from "../data/initialPhases";
import PhaseTasks from "@/features/tasks/components/PhaseTasks.jsx";
export default function PhaseDetails() {


    // Get phase id from URL
    const { phaseId } = useParams();


    // Find selected phase
    const phase = initialPhases.find(
        (item) => item.id === Number(phaseId)
    );


    // Safety check
    if (!phase) {
        return (
            <div>
                Phase not found.
            </div>
        );
    }


    return (

        <div className="space-y-6">


            {/* Phase information */}
            <div>

                <h1 className="text-3xl font-bold">
                    {phase.name}
                </h1>


                <p className="text-neutral-500">
                    Status: {phase.status}
                </p>


            </div>


            {/* Tasks inside this phase */}
            <PhaseTasks
                phaseId={phase.id}
            />


        </div>

    );

}