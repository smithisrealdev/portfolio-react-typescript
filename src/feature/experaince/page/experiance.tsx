import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { jobList } from '../mock/dataMock'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BgWhite from '../../../images/bg-white.webp'
import Container from '@mui/material/Container';
export default function experiance() {
    gsap.registerPlugin(ScrollTrigger)
    // gsap.defaults({ ease: "none", duration: 2 })
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, {
            x: -16,
            y: -16,
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
    interface JobProps {
        id: number,
        image: string,
        role: string,
        location: string,
        detailJob: string
    }
    const renderJobCard = ({ id, image, role, location, detailJob }: JobProps) => {
        return (
            <Container maxWidth="xl" >
                <Grid container spacing={2} className='flex items-center justify-center'>
                    {id % 2 === 0 && (
                        <Grid item xs={3} className='mt-8'>
                            <Grid className=' resume-custom -z-0 ' >
                                <img src={BgWhite} className='h-52 w-52 object-cover' />
                            </Grid>
                            <Grid className='-mt-48 ml-4' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                                <img src={image} className='h-52 w-52 object-cover' />
                            </Grid>
                        </Grid>
                    )
                    }
                    <Grid item xs={9} className=' flex items-center'>
                        <Grid className='text-xl font-atma text-white'>
                            <h1 className='font-semibold'>
                                {role}
                            </h1>
                            <h1 className='font-semibold text-orange-600'>
                                {location}
                            </h1>
                            <p className='font-light'>
                                {detailJob}
                            </p>
                        </Grid>
                    </Grid>
                    {id % 2 === 1 && (
                        <Grid item xs={3} className='box1 mt-8'>
                            <Grid className=' resume-custom -z-0 ' >
                                <img src={BgWhite} className='h-52 w-52 object-cover' />
                            </Grid>
                            <Grid className='-mt-48 ml-4 ' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                                <img src={image} className=' h-52 w-54 object-cover' />
                            </Grid>
                        </Grid>
                    )
                    }
                </Grid>

            </Container>

        )
    }
    return (
        <Container maxWidth="xl" className="pl-28 mb-12 bg-main pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('experiance.title')} />
            {jobList.map((items) => {
                return (
                    renderJobCard(items)
                )
            })}
        </Container>
    )
}
