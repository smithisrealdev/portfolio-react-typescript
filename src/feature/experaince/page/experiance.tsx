import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { gsap } from "gsap";
import { jobList } from '../mock/dataMock'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '@mui/material/Container';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function experiance() {
    gsap.registerPlugin(ScrollTrigger)
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

    const renderSwiperContent = ({ id, image, role, location, detailJob }: JobProps) => {
        return (
            <Grid key={id} container spacing={2} className='flex items-center justify-center p-6'>
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
    return (
        <Container maxWidth="xl" className="xl:pl-28 lg:pl-28 md:pl-20 sm:pl-8 ss:pl-6 xl:mb-12 bg-main">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('experiance.title')} />
            <div className='xl:hidden lg:hidden md:hidden sm:flex'>
                <Swiper
                    autoplay
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    // color='red'
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    className="mySwiper max-w-full rounded-md"
                >
                    {jobList.map((items, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {renderSwiperContent(items)}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            {jobList.map((items) => {
                return (
                    renderJobCard(items)
                )
            })}
        </Container>
    )
}
