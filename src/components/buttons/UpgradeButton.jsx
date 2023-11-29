import { Button, Tooltip } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning'; // Triangle icon
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function UpgradeButton({type, data, latestVersion}) {
    const allDataSameVersion = new Set(Object.values(data)).size === 1;
    const allDataUpToDate = Object.values(data).every(version => version === latestVersion);

    const handleUpdate = () => {
        console.log("Updating to the latest version...");
    };

    let tooltipContent;
    if (allDataSameVersion) {
        const currentVersion = Object.values(data)[0];
        tooltipContent = (
            <div>
                {currentVersion} <KeyboardArrowRightIcon style={{ fontSize: 'small' }} /> {latestVersion}
            </div>
        );
    } else {
        tooltipContent = (
            <div>
                {Object.entries(data).map(([key, value]) => (
                    <div key={key}>
                        {key}: {value}
                        {value !== latestVersion && <WarningIcon style={{ color: 'orange', fontSize: 'small' }} />}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <Tooltip title={tooltipContent} placement="top">
            <Button
                onClick={!allDataUpToDate ? handleUpdate : undefined}
                disabled={allDataUpToDate}
                startIcon={!allDataSameVersion && !allDataUpToDate ? <WarningIcon style={{ color: 'orange' }} /> : null}
            >
                {allDataUpToDate ? `Latest ${type} Version` : `Upgrade ${type} Version`}
            </Button>
        </Tooltip>
    );
}
