import React, { Suspense, useTransition, useEffect } from 'react'
import Tilte from '../../../shared/components/animation/withAnimationHoveText'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import SocialMedia from '../container/withAnimationSocialMedia'
import { FormatMessage } from '../../change_lang/change'
import { ImagesArray } from '../mock/dataMock'
import { gsap } from "gsap";
import Container from '@mui/material/Container';
export default function personal_profile() {
    interface ContactProps {
        link: string,
        icon: string
    }
    useEffect(() => {
        gsap.from(".box", {
            duration: 2,
            scale: 0.5,
            opacity: 0,
            delay: 0.5,
            stagger: 0.2,
            ease: "elastic",
            force3D: true
        });
    }, [])

    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, {
            rotation: "+=360",
            ease: "elastic",
            force3D: true
        });
    };

    const elementContact = ({ link, icon }: ContactProps) => {
        return (
            <Grid item xs={4} className='box flex w-full h-full' onMouseEnter={onEnter} >
                <a href={link} target="_blank">
                    <img className='object-cover  cursor-pointer' src={icon} />
                </a>
            </Grid>
        )
    }
    return (
        <Container maxWidth="xl" id='blog' className='col-span-2 grid-cols-2 pb-20 items-center w-full pl-32 justify-items-start'>
            <Suspense fallback={<></>} >
                <Grid container spacing={2}>
                    <Grid item xs={12} className='justify-center items-center'>
                        <Tilte noUseLeave={true} noUseEnter={false} text="H|e|y I|'|m" />
                        <Tilte noUseLeave={true} noUseEnter={false} text="A|p|i|c|h|e|t N|u|a|m|t|u|n|" />
                        <Tilte noUseLeave={true} noUseEnter={false} text="F|u|l|l|S|t|a|c|k D|e|v|e|l|o|p|e|r" />
                        <Grid item xs={12} className='z-20 mb-8'>
                            <p className='mt-6 text-xl font-light text-white font-atma'>
                                {FormatMessage("main.subTitle.1")}
                            </p>
                            <p className='text-xl font-light text-white font-atma'>
                                {FormatMessage("main.subTitle.2")}
                            </p>
                        </Grid>
                        <Grid item xs={5} className='flex gap-5 pt-8'>
                            {ImagesArray.map((items) => {
                                return elementContact(items)
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Suspense>
        </Container>
    )
}
