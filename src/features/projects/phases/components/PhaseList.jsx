// Import the component that displays a single phase
import PhaseCard from "./PhaseCard";

export default function PhaseList({ phases }) {

    /*
        PhaseList receives an array of phases.

        Example:

        [
            {
                id: 1,
                name: "Concept Design",
                ...
            },
            {
                id: 2,
                name: "3D Visualization",
                ...
            }
        ]

        Its only responsibility is to display them.
    */

    return (

        /*
            Use a grid layout so every PhaseCard
            appears underneath the previous one
            with consistent spacing.
        */
        <div className="grid gap-6">

            {/*
                Loop through every phase.

                map() creates one PhaseCard
                for each object inside the array.
            */}
            {phases.map((phase) => (

                /*
                    key helps React identify each item.

                    Always use a unique value.
                    In our case, phase.id is unique.
                */
                <PhaseCard
                    key={phase.id}

                    /*
                        Pass the entire phase object
                        to the PhaseCard component.
                    */
                    phase={phase}
                />

            ))}

        </div>

    );

}