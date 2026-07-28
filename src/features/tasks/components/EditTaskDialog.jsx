import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { initialEmployees } from "@/features/teams/data/initialEmployees";

export default function EditTaskDialog({
                                           task,
                                           onUpdate,
                                       }) {


    // Store edited values
    const [title, setTitle] = useState(task.title);

    const [status, setStatus] = useState(task.status);
// Selected employee
    const [assignedTo, setAssignedTo] = useState(task.assignedTo);
    const handleSave = () => {

        onUpdate({

            ...task,

            title,

            status,

            assignedTo,

        });

    };



    return (

        <Dialog>


            <DialogTrigger asChild>

                <Button variant="outline">
                    Edit
                </Button>

            </DialogTrigger>



            <DialogContent>


                <DialogHeader>

                    <DialogTitle>
                        Edit Task
                    </DialogTitle>

                </DialogHeader>



                <div className="space-y-4">


                    {/* Task title */}
                    <Input
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />


                    {/* Task status */}
                    <Select
                        value={status}
                        onValueChange={setStatus}
                    >

                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>


                        <SelectContent>

                            <SelectItem value="Not Started">
                                Not Started
                            </SelectItem>

                            <SelectItem value="In Progress">
                                In Progress
                            </SelectItem>

                            <SelectItem value="Waiting Approval">
                                Waiting Approval
                            </SelectItem>

                            <SelectItem value="Completed">
                                Completed
                            </SelectItem>

                        </SelectContent>

                    </Select>

                    {/* Assign employee */}
                    <Select
                        value={assignedTo}
                        onValueChange={setAssignedTo}
                    >

                        <SelectTrigger>
                            <SelectValue placeholder="Assign Employee" />
                        </SelectTrigger>

                        <SelectContent>

                            {/* Display all employees */}
                            {initialEmployees.map((employee) => (

                                <SelectItem
                                    key={employee.id}
                                    value={employee.name}
                                >
                                    {employee.name}
                                </SelectItem>

                            ))}

                        </SelectContent>

                    </Select>
                    <Button
                        onClick={handleSave}
                    >
                        Save Changes
                    </Button>


                </div>


            </DialogContent>


        </Dialog>

    );

}