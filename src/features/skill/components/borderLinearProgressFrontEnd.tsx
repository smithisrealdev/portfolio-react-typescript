import React, { startTransition } from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

type Theme = any
type Progress = number
const BorderLinearProgressFrontEnd = styled(LinearProgress)(({ theme }: Theme) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#ffffff',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#F44336',
    },
}));

export default function borderLinearProgressFrontEnd() {
    const [progress, setProgress] = React.useState<Progress>(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            startTransition(() => {
                setProgress((oldProgress) => {
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, 80);
                });
            });

        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <BorderLinearProgressFrontEnd variant="determinate" value={progress} />
    )
}
