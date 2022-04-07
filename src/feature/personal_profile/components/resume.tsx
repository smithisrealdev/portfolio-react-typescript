import React from 'react'
import { gsap } from "gsap";
import { Link } from "react-router-dom";
export default function resume() {
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    const onEnter = () => {
        gsap.to(q(".boxBg"), { x: 8, y: -3 });
    };
    const onLeave = () => {
        gsap.to(q(".boxBg"), { x: -1, y: 0 });
    };
    return (
        <div className='mt-16 z-20' ref={el}>
            <div onMouseEnter={onEnter} onMouseLeave={onLeave} className='w-24 bg-resume h-10 absolute z-10 resume-custom items-center justify-center flex cursor-pointer'>
                <Link to="about">
                    <h1 className='font-atma text-white font-medium'>
                    Resume
                    </h1>
                </Link>

            </div>
            <div className='boxBg w-24 bg-white h-10' />
        </div>
    )
}
