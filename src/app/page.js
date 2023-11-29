'use client'

import { Paper } from '@mui/material';
import React from 'react';
import UpgradeButton from "@/components/buttons/UpgradeButton";

export default function Home() {
    const consumerData = {
        "utdanning elev": "3.1.4"
    }

    const latestSpringVersion = "3.2.0"

    const gradleData = {
        "utdanning elev": "8.4"
    }

    const latestGradleVersion = "8.5"

    return (
        <div className="flex justify-center pt-8 w-full">
            <div className="w-4/5 bg-white">
                <Paper elevation={3} className="p-4">
                    <div className="flex justify-center space-x-4 mt-4">
                        <UpgradeButton type={"Spring Boot"} data={consumerData} latestVersion={latestSpringVersion} />
                        <UpgradeButton type={"Gradle"} data={gradleData} latestVersion={latestGradleVersion} />
                    </div>
                </Paper>
            </div>
        </div>
    );
}
