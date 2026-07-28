import { createContext, useContext, useState } from "react";

import { initialTasks } from "@/features/tasks/data/initialTasks";


// Create shared tasks context
const TasksContext = createContext();


export function TasksProvider({ children }) {


    // Store all tasks
    const [tasks, setTasks] = useState(initialTasks);



    // Add new task
    const addTask = (task) => {

        setTasks((currentTasks) => [

            ...currentTasks,

            task,

        ]);

    };



    return (

        <TasksContext.Provider
            value={{
                tasks,
                addTask,
                updateTask,
            }}

        >

            {children}

        </TasksContext.Provider>

    );

}
// Update existing task
const updateTask = (updatedTask) => {

    setTasks((currentTasks) =>

        currentTasks.map((task) =>

            task.id === updatedTask.id
                ? updatedTask
                : task

        )

    );

};


// Custom hook to use tasks anywhere
export function useTasks() {

    return useContext(TasksContext);

}