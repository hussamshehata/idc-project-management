// Displays tasks that belong to a specific phase

import { useTasks } from "@/context/TasksContext";

import TaskList from "./TaskList";
import CreateTaskDialog from "./CreateTaskDialog";


export default function PhaseTasks({ phaseId }) {


    // Get tasks and add function from Context
    const { tasks, addTask } = useTasks();



    // Filter tasks for this phase only
    const phaseTasks = tasks.filter(
        (task) => task.phaseId === phaseId
    );



    return (

        <div className="space-y-4">


            {/* Header */}
            <div className="flex items-center justify-between">


                <div>

                    <h2 className="text-xl font-bold">
                        Phase Tasks
                    </h2>

                    <p className="text-sm text-neutral-500">
                        Manage tasks inside this phase.
                    </p>

                </div>



                {/* Create new task */}
                <CreateTaskDialog
                    phaseId={phaseId}
                    onCreate={addTask}
                />


            </div>



            {/* Task list */}
            <TaskList
                tasks={phaseTasks}
            />


        </div>

    );

}