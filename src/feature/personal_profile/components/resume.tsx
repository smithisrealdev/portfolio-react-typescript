import React from 'react'
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { FormatMessage } from '../../change_lang/change'


export default function resume() {
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    const onEnter = () => {
        gsap.to(q(".boxBg"), {
            x: 6, 
            y: -7,
            // repeat: 1,
        });
        gsap.to(q(".box2"), {
            x: 17, 
            y: -18,
            // repeat: 1,
        });
    };
    const onLeave = () => {
        gsap.to(q(".boxBg"), {
            x:0, 
            y: 0,
            // repeat: 1,
        });
        gsap.to(q(".box2"), {
            x: 0, 
            y: 0,
            // repeat: 1,
        });
    };
    return (
        <div className='mt-16 z-20' ref={el}>
            <div className=' w-24 shadow-2xl bg-red-100  h-10 resume-custom -z-0 ' />
            <div className='boxBg -mt-10 w-24 bg-red-500 h-10 ' />
            <div onMouseEnter={onEnter} onMouseLeave={onLeave} className='box2 -mt-10 w-24 bg-resume h-10 items-center justify-center flex cursor-pointer ' >
                <Link to="about">
                    <h1 className='font-atma text-white font-medium'>
                        {FormatMessage('main.resume')}
                    </h1>
                </Link>
            </div>
        </div>
    )
}
