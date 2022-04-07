import React from 'react'
import Button from '@mui/material/Button';
import Tilte from '../../../shared/components/animation/withAnimationHoveText'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SocialMedia from '../container/withAnimationSocialMedia'
import ResumeBtn from '../components/resume'
export default function personal_profile() {
    
    return (
        <Box id='blog' className='col-span-2 grid-cols-2 pt-24 pb-24 items-center h-full w-full pl-32 h-2/6 justify-items-start'>
            <Grid container spacing={2} className='flex'>
                <Grid item xs={6}>
                    <Tilte noUseLeave={true} noUseEnter={false} text="H|e|y I|'|m" />
                    <Tilte noUseLeave={true} noUseEnter={false} text="A|p|i|c|h|e|t N|u|a|m|t|u|n|." />
                    <Tilte noUseLeave={true} noUseEnter={false} text="F|u|l|l|S|t|a|c|k D|e|v|e|l|o|p|e|r" />
                    <div className='w-2/4 z-20'>
                        <p className='mt-6 text-xl font-light text-white font-atma'>
                            Welcome to My Porfolio
                        </p>
                        <p className='text-xl font-light text-white font-atma'>
                            I am fullstack developer, I have experience in web application and moblie application developed with <b className='font-bold'>React</b> FrameWork.
                         </p>
                    </div>
                    <ResumeBtn />
                </Grid>
                <Grid item xs={6} className='flex flex-1 h-3/4 items-center '>
                    <SocialMedia />
                </Grid>

            </Grid>

        </Box>
    )
}
