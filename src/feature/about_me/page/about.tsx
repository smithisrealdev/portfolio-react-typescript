import React, { Suspense, useState } from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change';
import ResumeBtn from '../../about_me/components/resume';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProfileBg from '../../../images/profile.png'
import { gsap } from "gsap";
export default function about() {
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, {
            x: 16,
            y: 18,
            duration: 1,
            ease: "elastic",
            force3D: true
        });
    };
    const onLeave = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic",
            force3D: true
        });
    };
    // const onEnter = () => {
    //     gsap.from('.box1', {
    //         x: 15,
    //         y: 17,
    //     });
    // };
    return (
        <Container maxWidth="xl" className="pl-28 mb-12 bg-main pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('about.title')} />
            <Grid container spacing={2} className='flex pl-4'>
                <Grid item xs={12}>
                    <Grid item xs={12} className='text-xl font-light font-atma text-white'>
                        <Grid item xs={12} className='flex gap-16'>
                            <Grid item xs={10} className='mr-40'>
                                {FormatMessage('about.story.1')} <b className='font-semibold'>{FormatMessage('about.story.2')}</b> {FormatMessage('about.story.3')} <b className='font-semibold'>{FormatMessage('about.story.4')}</b> {FormatMessage('about.story.5')}
                                <Grid className='flex pt-12 gap-8' >
                                    <ResumeBtn />
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid className='ml-4 resume-custom -z-0 ' >
                                    <div className=' rounded-md xl:w-72 xl:h-72 md:w-52 md:h-52 border-4' />
                                </Grid>
                                <Grid className='-mt-78' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                                    <img className='box1 object-cover rounded-md xl:w-72 xl:h-72 md:w-52 md:h-52' src={ProfileBg} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}
