import { Input } from "@/components/ui/input.jsx";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.jsx";


export default function ProjectFilters({
                                           search,
                                           setSearch,
                                           statusFilter,
                                           setStatusFilter,
                                           projectTypeFilter,
                                           setProjectTypeFilter,
                                       }) {

    return (
        <div className="flex gap-4">

            {/* Search input
                This component does not own the search state.
                The parent controls the data.
                This keeps the component reusable.
            */}
            <Input
                className="max-w-sm"
                placeholder="Search projects or clients..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            {/* Filter by project status */}
            <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
            >
                <SelectTrigger className="w-56">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>

                    <SelectItem value="All">
                        All
                    </SelectItem>

                    <SelectItem value="Planning">
                        Planning
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


            {/* Filter by project type */}
            <Select
                value={projectTypeFilter}
                onValueChange={setProjectTypeFilter}
            >

                <SelectTrigger className="w-56">

                    <SelectValue placeholder="Project Type"/>

                </SelectTrigger>


                <SelectContent>

                    <SelectItem value="All">
                        All
                    </SelectItem>

                    <SelectItem value="Residential">
                        Residential
                    </SelectItem>

                    <SelectItem value="Commercial">
                        Commercial
                    </SelectItem>

                    <SelectItem value="Office">
                        Office
                    </SelectItem>

                </SelectContent>

            </Select>


        </div>
    );
}