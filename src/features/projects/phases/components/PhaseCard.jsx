import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PhaseCard({ phase }) {
    return (
        <Card>

            <CardHeader className="flex flex-row items-center justify-between">

                <CardTitle>
                    {phase.name}
                </CardTitle>

                <Badge>
                    {phase.status}
                </Badge>

            </CardHeader>

            <CardContent className="space-y-4">

                {/* Progress */}
                <div>

                    <div className="mb-2 flex justify-between text-sm">

                        <span>Progress</span>

                        <span>{phase.progress}%</span>

                    </div>

                    <div className="h-2 rounded-full bg-neutral-200">

                        <div
                            className="h-2 rounded-full bg-neutral-900 transition-all"
                            style={{
                                width: `${phase.progress}%`,
                            }}
                        />

                    </div>

                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4 text-sm">

                    <div>

                        <p className="text-neutral-500">
                            Start
                        </p>

                        <p>{phase.startDate}</p>

                    </div>

                    <div>

                        <p className="text-neutral-500">
                            Deadline
                        </p>

                        <p>{phase.targetEndDate}</p>

                    </div>

                </div>

                <Button>
                    Open Phase
                </Button>

            </CardContent>

        </Card>
    );
}