'use client'

import {Paper} from '@mui/material';
import React from 'react';
import UpgradeButton from "@/components/buttons/UpgradeButton";

export default function Home() {
    const consumerData = {
        "utdanning elev": "3.1.4"
    }

    const latestSpringVersion = "3.2.0"

    const gradleData = {
        "utdanning elev": "8.4",
        "utdanning vurdering": "8.5"
    }

    const latestGradleVersion = "8.5"

    return (
        <Paper className="flex justify-center items-center w-3/5 m-auto my-8 p-4">
            <div className="flex justify-center items-center space-x-4">
                <UpgradeButton type={"Spring Boot"} data={consumerData} latestVersion={latestSpringVersion}/>
                <UpgradeButton type={"Gradle"} data={gradleData} latestVersion={latestGradleVersion}/>
            </div>
        </Paper>
    );
}
