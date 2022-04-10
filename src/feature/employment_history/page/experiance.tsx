import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import TrueLogo from '../../../images/true-logo.webp'
import CupcodeLogo from '../../../images/cupcode-logo.jpeg'
import FreelanceLogo from '../../../images/freelance-logo.webp'
import HiiLogo from '../../../images/hii-logo.webp'
export default function experiance() {
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, {
            x: -16,
            y: -16,
            duration: 1,
        });
    };
    const onLeave = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, {
            x: 0,
            y: 0,
            duration: 1,
        });
    };
    return (
        <Box ref={el} className="mt-20  w-full">
            <Grid className='bg-main pl-20  '>
                <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('experiance.title')} />
                <Grid container spacing={2} className='flex pl-20 mb-14 '>
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
                <Grid container spacing={2} className='flex pl-20 mb-14'>

                    <Grid item xs={7} className='flex items-center'>
                        <Grid className='text-xl font-atma text-white'>
                            <h1 className='font-semibold'>
                                FRONTEND DEVELOPER (REACT)
                        </h1>
                            <h1 className='font-semibold text-orange-600'>
                                Can Innovation Co., Ltd. November 2020 to Jun 2021
                        </h1>
                            <p className='font-light'>
                                - It's developed with active at work that cannot only develop the system but also understand the business and provide sincere service to customers.
                                My experience is developing Websites and Applications using ReactJs and React Native
                        </p>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className='mt-8'>
                        <div className='w-52 shadow-2xl bg-white  h-52 resume-custom -z-0 ' />
                        <div className='boxBg2 -mt-48 ml-4 ' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                            <img src={CupcodeLogo} className=' h-52 w-52 object-contain' />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className='flex pl-20 mb-14'>
                    <Grid item xs={3} className='mt-8'>
                        <div className='w-52 shadow-2xl bg-white  h-52 resume-custom -z-0 ' />
                        <div className='boxBg -mt-48 ml-4 ' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                            <img src={FreelanceLogo} className=' h-52 w-52 object-cover' />
                        </div>
                    </Grid>
                    <Grid item xs={7} className='flex items-center'>
                        <Grid className='text-xl font-atma text-white'>
                            <h1 className='font-semibold'>
                                FRONTEND DEVELOPER (REACT NATIVE)
                        </h1>
                            <h1 className='font-semibold text-orange-600'>
                                Freelancer Mar 2021 to Jun 2021
                        </h1>
                            <p className='font-light'>
                                - It's an application about teaching and learning and is also an application that will help increase the skills of students in various fields because in this application there are various cross videos to learn. You can also join meetings and open online lessons. (Before
                                ArchieveNex you can enter this app, you must be a member)
                        </p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className='flex pl-20 pb-14'>
                    <Grid item xs={7} className='flex items-center'>
                        <Grid className='text-xl font-atma text-white'>
                            <h1 className='font-semibold'>
                                DATA ENGINEER
                        </h1>
                            <h1 className='font-semibold text-orange-600'>
                                Hydro-Informatics Intitute June 2020 to November 2020
                        </h1>
                            <p className='font-light'>
                                - Overseeing analyzing and management current state of water in rice fields. and SWAT (soil and water assessment tool) model using for analysis water balance of 25 watershed area in Thailand developer ( Python Postgresql)
                        </p>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className='mt-8'>
                        <div className='w-52 shadow-2xl bg-white  h-52 resume-custom -z-0 ' />
                        <div className='boxBg2 -mt-48 ml-4 ' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                            <img src={HiiLogo} className=' h-52 w-52 object-contain' />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
