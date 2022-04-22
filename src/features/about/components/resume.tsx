import React from 'react'
import { gsap } from "gsap";
import Link from '@mui/material/Link';
import { FormatMessage } from '../../lang/change'
import ResumePDF from '../../../assets/ResumeApichet.pdf';
import Text from '../../../shared/components/Text'

type Open = boolean
type MutableRefObject = React.MutableRefObject<HTMLInputElement>
export default function resume() {
    const [open, setOpen] = React.useState<Open>(false);
    const el = React.useRef() as MutableRefObject;
    const q = gsap.utils.selector(el);
    const onEnter = () => {
        gsap.to(q(".boxBg"), {
            x: 6,
            y: -7,
        });
        gsap.to(q(".box2"), {
            x: 17,
            y: -18,
        });
    };
    const onLeave = () => {
        gsap.to(q(".boxBg"), {
            x: 0,
            y: 0,
        });
        gsap.to(q(".box2"), {
            x: 0,
            y: 0,
        });
    };

    return (
        <React.Fragment>
            <div className=' z-20' ref={el}>
                <div className=' w-24 sm:w-12 shadow-2xl bg-orange-100  h-12 sm:h-8 resume-custom -z-0 ' />
                <div className='boxBg -mt-12 sm:-mt-8 w-24 sm:w-14 bg-orange-400 h-12 sm:h-8 ' />
                <div onMouseEnter={onEnter} onClick={() => setOpen(true)} onMouseLeave={onLeave} className='box2 -mt-12 sm:-mt-8 w-24 sm:w-14 bg-resume h-12 sm:h-8 items-center justify-center flex cursor-pointer ' >
                    <Link href={ResumePDF} target='_blank' download underline="none">
                        <Text text={FormatMessage('main.resume')} className=' text-white font-medium' />
                    </Link>
                </div>
            </div>
        </React.Fragment>

    )
}
