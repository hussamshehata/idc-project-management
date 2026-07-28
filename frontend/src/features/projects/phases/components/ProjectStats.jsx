import { Card, CardContent } from "@/components/ui/card.jsx";


export default function ProjectStats({ projects }) {

    /*
      We calculate these values from the projects array.

      We do NOT store them in state.

      Why?

      Because they are derived data.

      If projects change:
      - add project
      - delete project
      - edit status

      These numbers update automatically.
    */

    const totalProjects = projects.length;


    const inProgressProjects = projects.filter(
        (project) => project.status === "In Progress"
    ).length;


    const waitingApprovalProjects = projects.filter(
        (project) => project.status === "Waiting Approval"
    ).length;



    return (
        <div className="grid gap-4 md:grid-cols-3">


            {/* Total Projects Card */}
            <Card>

                <CardContent className="p-5">

                    <p className="text-sm text-neutral-500">
                        Total Projects
                    </p>


                    <h2 className="mt-2 text-3xl font-bold">
                        {totalProjects}
                    </h2>

                </CardContent>

            </Card>



            {/* In Progress Card */}
            <Card>

                <CardContent className="p-5">

                    <p className="text-sm text-neutral-500">
                        In Progress
                    </p>


                    <h2 className="mt-2 text-3xl font-bold">
                        {inProgressProjects}
                    </h2>

                </CardContent>

            </Card>




            {/* Waiting Approval Card */}
            <Card>

                <CardContent className="p-5">

                    <p className="text-sm text-neutral-500">
                        Waiting Approval
                    </p>


                    <h2 className="mt-2 text-3xl font-bold">
                        {waitingApprovalProjects}
                    </h2>

                </CardContent>

            </Card>



        </div>
    );
}