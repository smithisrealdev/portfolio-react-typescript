import React,{startTransition} from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

type ThemeType = any
type Progress = number
const BorderLinearProgressBackEnd = styled(LinearProgress)(({ theme }: ThemeType) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#ffffff',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#01EC64',
    },
}));
export default function borderLinearProgressBackEnd() {
    const [progress, setProgress] = React.useState<Progress>(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            startTransition(() => {
                setProgress((oldProgress) => {
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, 50);
                });
            });
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <BorderLinearProgressBackEnd variant="determinate" value={progress} />
    )
}
