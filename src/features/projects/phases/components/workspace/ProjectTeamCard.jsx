import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";


export default function ProjectTeamCard({ project }) {


    return (

        <Card>


            <CardHeader>

                <CardTitle>
                    Project Team
                </CardTitle>

            </CardHeader>




            <CardContent className="space-y-4">


                <div>

                    <p className="text-sm text-neutral-500">
                        Project Manager
                    </p>


                    <p className="font-medium">
                        {project.projectManager}
                    </p>

                </div>



                <div>

                    <p className="text-sm text-neutral-500">
                        Team Members
                    </p>


                    <p className="font-medium">
                        No members assigned yet
                    </p>

                </div>



            </CardContent>


        </Card>

    );

}