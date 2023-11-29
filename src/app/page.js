'use client'

import { Paper } from '@mui/material';
import React from 'react';
import UpgradeButton from "@/components/buttons/UpgradeButton";

export default function Home() {
    const data = {
        "utdanning elev": "3.1.4"
    }

    const latestVersion = "3.2.0"

    return (
        <div className="flex justify-center pt-8 w-full">
            <div className="w-4/5 bg-white">
                <Paper elevation={3} className="p-4">
                    <div className="flex justify-center space-x-4 mt-4">
                        <UpgradeButton type={"Spring Boot"} data={data} latestVersion={latestVersion} />
                    </div>
                </Paper>
            </div>
        </div>
    );
}
