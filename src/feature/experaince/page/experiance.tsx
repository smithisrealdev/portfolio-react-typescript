import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { gsap } from "gsap";
import { jobList } from '../mock/dataMock'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export default function experiance() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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
            <Container maxWidth="xl" >
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
    console.log("value ::",value);
    return (
        <Container maxWidth="xl" className="pl-28 xl:mb-12 bg-main pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('experiance.title')} />
            <div className='xl:hidden lg:hidden sm:flex w-full justify-center items-center'>
                <Tabs value={value} onChange={handleChange} scrollButtons='auto' textColor="secondary"
                    indicatorColor="secondary" aria-label="icon label tabs example">
                    <Tab label={<strong className='font-atma text-sm text-white'>PTT</strong>} />
                    <Tab label={<strong className='font-atma text-sm text-white'>True</strong>} />
                    <Tab label={<strong className='font-atma text-sm text-white'>Caninno</strong>} />
                    <Tab label={<strong className='font-atma text-sm text-white'>HII</strong>} />
                </Tabs>
            </div>
            {jobList.map((items) => {
                return (
                    renderJobCard(items)
                )
            })}
        </Container>
    )
}
