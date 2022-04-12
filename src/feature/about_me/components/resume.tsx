import React from 'react'
import { gsap } from "gsap";
import Link from '@mui/material/Link';
import { FormatMessage } from '../../change_lang/change'
import ResumePDF from '../../../pdf/ResumeApichet.pdf';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
export default function resume() {
    const [open, setOpen] = React.useState(false);
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    const onEnter = () => {
        gsap.to(q(".boxBg"), {
            x: 6,
            y: -7,
            duration: 1,
            // repeat: 1,
        });
        gsap.to(q(".box2"), {
            x: 17,
            y: -18,
            duration: 1,
            // repeat: 1,
        });
    };
    const onLeave = () => {
        gsap.to(q(".boxBg"), {
            x: 0,
            y: 0,
            duration: 1,
            // repeat: 1,
        });
        gsap.to(q(".box2"), {
            x: 0,
            y: 0,
            duration: 1,
            // repeat: 1,
        });
    };

    return (
        <React.Fragment>
            <div className=' z-20' ref={el}>
                <div className=' w-24 shadow-2xl bg-red-100  h-12 resume-custom -z-0 ' />
                <div className='boxBg -mt-12 w-24 bg-red-500 h-12 ' />
                <div onMouseEnter={onEnter} onClick={()=> setOpen(true) } onMouseLeave={onLeave} className='box2 -mt-12 w-24 bg-resume h-12 items-center justify-center flex cursor-pointer ' >
                    <Link href={ResumePDF} download underline="none">
                        <h1 className='font-atma text-white font-medium'>
                            {FormatMessage('main.resume')}
                        </h1>
                    </Link>
                </div>
            </div>
            <Collapse in={open}>
                <Alert
                    severity="warning"
                    action={
                        <IconButton
                            aria-label="close"

                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                   {FormatMessage('about.warning')}
                </Alert>
            </Collapse>
        </React.Fragment>

    )
}
