import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function ProjectStatusCard({ project }) {


    return (

        <Card>


            <CardHeader>

                <CardTitle>
                    Timeline & Status
                </CardTitle>

            </CardHeader>




            <CardContent className="space-y-4">


                <div>

                    <p className="text-sm text-neutral-500">
                        Current Phase
                    </p>


                    <p className="font-medium">
                        {project.status}
                    </p>

                </div>




                <div>

                    <p className="text-sm text-neutral-500">
                        Start Date
                    </p>


                    <p className="font-medium">
                        {project.startDate}
                    </p>

                </div>




                <div>

                    <p className="text-sm text-neutral-500">
                        Target End Date
                    </p>


                    <p className="font-medium">
                        {project.targetEndDate}
                    </p>

                </div>



            </CardContent>


        </Card>

    );

}