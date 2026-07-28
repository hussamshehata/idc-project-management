import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function TimeTracking() {

    // Is the timer currently running?
    const [isRunning, setIsRunning] = useState(false);

    // Total tracked seconds
    const [seconds, setSeconds] = useState(0);

    // Increase timer every second while running
    useEffect(() => {

        if (!isRunning) return;

        const interval = setInterval(() => {

            setSeconds((currentSeconds) => currentSeconds + 1);

        }, 1000);

        // Clear interval when component unmounts or timer stops
        return () => clearInterval(interval);

    }, [isRunning]);

    // Start timer
    const handleStart = () => {
        setIsRunning(true);
    };

    // Stop timer
    const handleStop = () => {
        setIsRunning(false);
    };

    // Reset timer
    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (

        <Card>

            <CardContent className="space-y-4 p-6">

                {/* Section title */}
                <h2 className="text-lg font-semibold">
                    Time Tracking
                </h2>

                {/* Placeholder time */}
                <p className="text-3xl font-bold">
                    {Math.floor(seconds / 3600)}h{" "}
                    {Math.floor((seconds % 3600) / 60)}m{" "}
                    {seconds % 60}s
                </p>

                {/* Timer controls */}
                <div className="flex gap-2">

                    <Button
                        onClick={handleStart}
                        disabled={isRunning}
                    >
                        Start
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={handleStop}
                        disabled={!isRunning}
                    >
                        Stop
                    </Button>

                    <Button
                        variant="outline"
                        onClick={handleReset}
                    >
                        Reset
                    </Button>

                </div>

            </CardContent>

        </Card>

    );

}