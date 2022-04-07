import { gsap } from "gsap";
import React from 'react'
import Grid from '@mui/material/Grid';
import { ImagesArray } from '../mock/dataMock';
export default function withAnimationSocialMedia() {
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    React.useEffect(() => {
        gsap.to(q(".images"), {
            y: 20,
            // scale: 0.1,
            stagger: 0.33,
            repeat: -1,
            // repeatDelay: 1,
            ease: "bounce",
            yoyoEase: "power3",
            yoyo: true
        });
    })

    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, { rotationZ: "+=860", scale: 1 });
    };

    const DisplayAnimation = (obj: any) => {
        return (
            <div onMouseEnter={onEnter} className="images overflow-hidden p-4 cursor-pointer border-2 " >
                <a href={obj.link} target="_blank">
                    <img className='w-24 h-24 rounded-full object-cover' src={obj.icon} />
                </a>
            </div>
        )
    }
    return (
        <Grid className='grid grid-rows-3 grid-flow-col ml-16 rounded-3xl p-8' ref={el}>
            {ImagesArray.map((items) => {
                return (
                    DisplayAnimation(items)
                )
            })
            }
        </Grid>
    )

}

