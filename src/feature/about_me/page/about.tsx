import React, { Suspense, useState, useEffect } from 'react'
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
    useEffect(() => {
        gsap.fromTo('.box1', {
            x: 16,
            y: 18,
            duration: 1,
            ease: "elastic",
            force3D: true
        }, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic",
            force3D: true
        });
    }, [])
    return (
        <Container maxWidth="xl" className="pl-28 xl:mb-12 bg-main pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('about.title')} />
            <Grid container spacing={2} className='flex pl-4'>
                <Grid item xs={12}>
                    <Grid item xs={12} className='xl:text-xl sm:text-sm md:text-base lg:text-lg font-light font-atma text-white'>
                        <Grid item xs={12} className='flex sm:block gap-16'>
                            <Grid item xs sm={12} className='xl:mr-40'>
                                {FormatMessage('about.story.1')} <b className='font-semibold'>{FormatMessage('about.story.2')}</b> {FormatMessage('about.story.3')} <b className='font-semibold'>{FormatMessage('about.story.4')}</b> {FormatMessage('about.story.5')}
                                <Grid className='flex pt-12 sm:pt-6 gap-8 sm:hidden' >
                                    <ResumeBtn />
                                </Grid>
                            </Grid>
                                <Grid item xs={12}>
                                    <div className='flex justify-center items-center sm:w-full sm:pt-14 lg:pt-10'>
                                        <div>
                                            <Grid className='ml-4 resume-custom -z-0 ' >
                                                <div className='-mt-4 rounded-md xl:w-72 xl:h-72 sm:h-36 sm:w-36 md:h-48 md:w-48 lg:h-56 lg:w-56 border-4 sm:border-2' />
                                            </Grid>
                                            <Grid className='sm:-mt-40 lg:-mt-60 md:-mt-52 -mt-78' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                                                <img className='box1 object-cover rounded-md xl:w-72 xl:h-72 sm:h-36 sm:w-36 md:h-48 md:w-48 lg:h-56 lg:w-56' src={ProfileBg} />
                                            </Grid>
                                        </div>
                                    </div>
                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}
