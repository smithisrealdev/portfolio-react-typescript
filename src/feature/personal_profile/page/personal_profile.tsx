import React, { Suspense, useTransition, useEffect } from 'react'
import Tilte from '../../../shared/components/animation/withAnimationHoveText'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import SocialMedia from '../container/withAnimationSocialMedia'
import { FormatMessage } from '../../change_lang/change'
import WapProfile from '../components/wapperProfile'
import { ImagesArray } from '../mock/dataMock'
import { gsap } from "gsap";
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

    const elementContact = ({ link, icon }: ContactProps) => {
        return (
            <Grid item xs={4} className='box flex h-24' >
                <a href={link} target="_blank">
                    <img className='rounded-md cursor-pointer' src={icon} />
                </a>
            </Grid>
        )
    }
    return (
        <Box id='blog' className='col-span-2 grid-cols-2 pt-24 pb-20 items-center h-full w-full pl-32 h-2/6 justify-items-start'>
            <Suspense fallback={<></>} >
                <Grid container spacing={2} className='flex'>
                    <Grid item xs={6}>
                        <Tilte noUseLeave={true} noUseEnter={false} text="H|e|y I|'|m" />
                        <Tilte noUseLeave={true} noUseEnter={false} text="A|p|i|c|h|e|t N|u|a|m|t|u|n|" />
                        <Tilte noUseLeave={true} noUseEnter={false} text="F|u|l|l|S|t|a|c|k D|e|v|e|l|o|p|e|r" />
                        <div className='w-2/4 z-20 mb-8'>
                            <p className='mt-6 text-xl font-light text-white font-atma'>
                                {FormatMessage("main.subTitle.1")}
                            </p>
                            <p className='text-xl font-light text-white font-atma'>
                                {FormatMessage("main.subTitle.2")}
                            </p>
                        </div>
                        <Grid className='flex gap-5 w-64'>
                            {ImagesArray.map((items) => {
                                return elementContact(items)
                            })}
                        </Grid>
                    </Grid>
                    <WapProfile />
                </Grid>
            </Suspense>


        </Box>
    )
}
