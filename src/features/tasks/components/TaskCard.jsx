import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export default function TaskCard({ task }) {

    return (

        <Card>

            <CardHeader>

                {/* Task title */}
                <CardTitle className="text-lg">
                    {task.title}
                </CardTitle>

            </CardHeader>


            <CardContent className="space-y-4">

                {/* Task description */}
                <p className="text-sm text-neutral-500">
                    {task.description}
                </p>


                <div className="grid grid-cols-2 gap-4 text-sm">

                    <div>
                        <p className="text-neutral-500">
                            Assigned To
                        </p>

                        <p>
                            {task.assignedTo}
                        </p>
                    </div>


                    <div>
                        <p className="text-neutral-500">
                            Due Date
                        </p>

                        <p>
                            {task.dueDate}
                        </p>
                    </div>

                </div>


                {/* Status and priority */}
                <div className="flex gap-2">

                    <Badge variant="secondary">
                        {task.status}
                    </Badge>


                    <Badge variant="outline">
                        {task.priority}
                    </Badge>

                </div>


                {/* Time information */}
                <div className="text-sm">

                    <p className="text-neutral-500">
                        Time
                    </p>

                    <p>
                        {task.actualHours}h / {task.estimatedHours}h
                    </p>

                </div>


            </CardContent>

        </Card>

    );

}