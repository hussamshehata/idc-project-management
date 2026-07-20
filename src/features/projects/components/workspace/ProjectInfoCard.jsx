import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function ProjectInfoCard({ project }) {


    return (

        <Card>


            <CardHeader>

                <CardTitle>
                    Project Information
                </CardTitle>

            </CardHeader>



            <CardContent className="space-y-4">


                <div>

                    <p className="text-sm text-neutral-500">
                        Project Type
                    </p>

                    <p className="font-medium">
                        {project.projectType}
                    </p>

                </div>



                <div>

                    <p className="text-sm text-neutral-500">
                        Design Style
                    </p>

                    <p className="font-medium">
                        {project.style || "Not specified"}
                    </p>

                </div>




                <div>

                    <p className="text-sm text-neutral-500">
                        Area
                    </p>

                    <p className="font-medium">
                        {project.area
                            ? `${project.area} m²`
                            : "Not specified"
                        }
                    </p>

                </div>




                <div>

                    <p className="text-sm text-neutral-500">
                        Location
                    </p>

                    <p className="font-medium">
                        {project.location}
                    </p>

                </div>


            </CardContent>


        </Card>

    );

}