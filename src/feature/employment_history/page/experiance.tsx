import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import TrueLogo from '../../../images/true-logo.webp'
export default function experiance() {
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    const onEnter = () => {
        gsap.to(q(".boxBg"), {
            x: -16,
            y: -16,
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
        <Box ref={el} className="mt-10 pb-20 bg-main pl-20 h-full">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('experiance.title')} />
            <Grid container spacing={2} className='flex pl-20'>
                <Grid item xs={3} className='mt-8'>
                    <div className='w-52 shadow-2xl bg-white  h-52 resume-custom -z-0 ' />
                    <div className='boxBg -mt-48 ml-4 ' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                        <img src={TrueLogo} className=' h-52 w-52 object-cover' />
                    </div>
                </Grid>
                <Grid item xs={7} className='flex items-center'>
                    <Grid className='text-xl font-atma text-white'>
                        <h1 className='font-semibold'>
                            FULLSTACK DEVELOPER (REACT,GOLANG)
                        </h1>
                        <h1 className='font-semibold text-orange-600'>
                            True Corporation Jun 2021 to Present
                        </h1>
                        <p className='font-light'>
                            -  I've been tasked with overseeing both FE issues developed with ReactJs, Redux based stores, and BE written for development with Golang, and I've also been tasked with overseeing the deployment. EnvTest/Production with Jenkins and I can use Kibana to view the logs of each team project repository and I can also use Kong to create an API route service.
                        </p>
                    </Grid>
                </Grid>

            </Grid>

        </Box>
    )
}
