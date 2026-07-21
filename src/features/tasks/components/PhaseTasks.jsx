// Displays tasks that belong to a specific phase

import { initialTasks } from "../data/initialTasks";

import TaskList from "./TaskList";


export default function PhaseTasks({ phaseId }) {


    // Get only tasks that belong to this phase
    const phaseTasks = initialTasks.filter(
        (task) => task.phaseId === phaseId
    );


    return (

        <div className="space-y-4">


            {/* Section title */}
            <div>

                <h2 className="text-xl font-bold">
                    Phase Tasks
                </h2>

                <p className="text-sm text-neutral-500">
                    Manage tasks inside this phase.
                </p>

            </div>


            {/* Display tasks */}
            <TaskList
                tasks={phaseTasks}
            />


        </div>

    );

}