import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {onEnter,onLeave} from '../components/animation/withMouseEvent'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

type JobProps = {
    id: number,
    image: string,
    role: string,
    location: string,
    detailJob: string
}

export default function SwiperContent({ id, image, role, location, detailJob }: JobProps) {
    return (
        <Grid key={id} container spacing={2} className='flex items-center justify-center'>
            <Grid item xs={9} className=' flex items-center'>
                <Grid className='text-sm font-atma text-white '>
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
            <Grid item xs={3} className='box1 mt-8 ss:hidden'>
                <Grid className=' resume-custom -z-0 ' >
                    <div className='h-24 w-24 rounded-md bg-white' />
                </Grid>
                <Grid className='-mt-20 ml-4' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                    <img src={image} className='h-24 w-24 object-cover rounded-md' />
                </Grid>
            </Grid>
        </Grid>
    )
}
