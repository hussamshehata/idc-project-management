import ProjectRow from "./ProjectRow";


export default function ProjectTable({ projects }) {

    return (

        <div className="rounded-2xl border bg-white">


            {/* Table Header */}
            <div className="border-b px-6 py-4">

                <h2 className="font-semibold">
                    Project List
                </h2>

            </div>



            {/*
                If no projects match the search/filter,
                show an empty state.
            */}
            {projects.length === 0 ? (

                <div className="p-8 text-center text-neutral-500">

                    No projects found.

                </div>

            ) : (


                <div className="divide-y">


                    {
                        projects.map((project) => (

                            /*
                                Each project gets its own row component.

                                key helps React identify each item
                                when updating the list.
                            */
                            <ProjectRow
                                key={project.id}
                                project={project}
                            />

                        ))
                    }


                </div>

            )}


        </div>

    );
}