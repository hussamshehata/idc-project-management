// Displays a list of tasks
// Responsible only for looping and rendering TaskCard components

import TaskCard from "./TaskCard";


export default function TaskList({ tasks }) {

    return (

        <div className="grid gap-4">

            {/*
                Loop through all tasks
                and create one TaskCard for each task
            */}
            {tasks.map((task) => (

                <TaskCard
                    key={task.id}
                    task={task}
                />

            ))}

        </div>

    );

}