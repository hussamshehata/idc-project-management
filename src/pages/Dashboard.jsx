import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">
                Dashboard
            </h1>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <Card>
                    <CardContent className="p-6">
                        <p className="text-sm text-neutral-500">
                            Active Projects
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            12
                        </h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <p className="text-sm text-neutral-500">
                            Tasks In Progress
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            34
                        </h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <p className="text-sm text-neutral-500">
                            Waiting Approval
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            8
                        </h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <p className="text-sm text-neutral-500">
                            Team Members
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            15
                        </h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}