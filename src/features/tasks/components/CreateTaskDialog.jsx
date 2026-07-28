import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function CreateTaskDialog({ onCreate, phaseId }) {

    // Stores form values
    const [title, setTitle] = useState("");

    const handleSubmit = () => {

        // Create new task object
        const newTask = {

            id: Date.now(),

            phaseId,

            title,

            description: "",

            assignedTo: "Unassigned",

            status: "Not Started",

            priority: "Medium",

            dueDate: "",

            estimatedHours: 0,

            actualHours: 0,

        };


        // Send task to parent/context
        onCreate(newTask);


        // Clear input
        setTitle("");

    };


    return (

        <Dialog>

            <DialogTrigger asChild>

                <Button>
                    Add Task
                </Button>

            </DialogTrigger>



            <DialogContent>

                <DialogHeader>

                    <DialogTitle>
                        Create Task
                    </DialogTitle>

                </DialogHeader>



                <div className="space-y-4">


                    {/* Task title input */}
                    <Input
                        placeholder="Task name"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />



                    <Button
                        onClick={handleSubmit}
                    >
                        Create
                    </Button>


                </div>


            </DialogContent>


        </Dialog>

    );

}