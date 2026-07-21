import { useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { initialPhases } from "../data/initialPhases";

import PhaseTasks from "@/features/tasks/components/PhaseTasks";


export default function PhaseDetails() {

    // Get phase id from URL
    const { phaseId } = useParams();


    // Find the selected phase
    const phase = initialPhases.find(
        (item) => item.id === Number(phaseId)
    );


    // If phase does not exist
    if (!phase) {
        return (
            <div>
                Phase not found.
            </div>
        );
    }


    return (

        <div className="space-y-6">


            {/* Phase Header */}
            <Card>

                <CardContent className="space-y-4 p-6">


                    <div className="flex items-center justify-between">

                        <h1 className="text-3xl font-bold">
                            {phase.name}
                        </h1>


                        <Badge>
                            {phase.status}
                        </Badge>

                    </div>



                    {/* Phase dates */}
                    <div className="grid gap-4 md:grid-cols-3">


                        <div>

                            <p className="text-sm text-neutral-500">
                                Start Date
                            </p>

                            <p>
                                {phase.startDate}
                            </p>

                        </div>



                        <div>

                            <p className="text-sm text-neutral-500">
                                Target End Date
                            </p>

                            <p>
                                {phase.targetEndDate}
                            </p>

                        </div>



                        <div>

                            <p className="text-sm text-neutral-500">
                                Progress
                            </p>

                            <p>
                                {phase.progress}%
                            </p>

                        </div>


                    </div>


                </CardContent>

            </Card>



            {/* Tasks inside this phase */}
            <PhaseTasks
                phaseId={phase.id}
            />


        </div>

    );

}