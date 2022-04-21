import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {onEnter,onLeave} from '../components/animation/withMouseEvent'

type JobProps = {
    id: number,
    image: string,
    role: string,
    location: string,
    detailJob: string
}

export default function CardJob({ id, image, role, location, detailJob }: JobProps) {

    return (
        <Container key={id} maxWidth="xl" >
            <div className='sm:hidden'>
                <Grid container spacing={2} className='flex items-center justify-center lg:flex md:flex sm:hidden xl:flex'>
                    {id % 2 === 0 && (
                        <Grid item xs={3} className='mt-8'>
                            <Grid className=' resume-custom -z-0 ' >
                                <div className='xl:h-52 xl:w-52 lg:h-52 lg:w-52 md:h-36 md:w-36 sm:h-20 sm:w-20 rounded-md bg-white' />
                            </Grid>
                            <Grid className='xl:-mt-48 lg:-mt-48 md:-mt-32 sm:-mt-16 ml-4' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                                <img src={image} className='xl:h-52 xl:w-52 lg:h-52 lg:w-52 md:h-36 md:w-36 sm:h-20 sm:w-20 object-cover rounded-md ' />
                            </Grid>
                        </Grid>
                    )
                    }
                    <Grid item xs={9} className=' flex items-center'>
                        <Grid className='xl:text-xl lg:text-lg md:text-base sm:text-sm font-atma text-white'>
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
                                <div className='xl:h-52 xl:w-52 lg:h-52 lg:w-52 md:h-36 md:w-36 sm:h-20 sm:w-20 rounded-md bg-white' />
                            </Grid>
                            <Grid className='xl:-mt-48 lg:-mt-48 md:-mt-32 sm:-mt-16 ml-4 ' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                                <img src={image} className='xl:h-52 xl:w-52 lg:h-52 lg:w-52 md:h-36 md:w-36 sm:h-20 sm:w-20 object-cover rounded-md' />
                            </Grid>
                        </Grid>
                    )
                    }
                </Grid>
            </div>
        </Container>
    )
}
