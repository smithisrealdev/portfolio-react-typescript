import React, { Suspense, useState } from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change';
import ResumeBtn from '../../about_me/components/resume';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
export default function about() {
    
    return (
        <Container maxWidth="xl" className="pl-28 mb-12 bg-main pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('about.title')} />
            <Grid container spacing={2} className='flex pl-4'>
                <Grid item xs={12}>
                    <Grid item xs={12} className='text-xl font-light font-atma text-white'>
                        {FormatMessage('about.story.1')} <b className='font-semibold'>{FormatMessage('about.story.2')}</b> {FormatMessage('about.story.3')} <b className='font-semibold'>{FormatMessage('about.story.4')}</b> {FormatMessage('about.story.5')}
                        <Grid className='flex pt-12 gap-8' >
                            <ResumeBtn />
                            {/* <Alert severity="warning">This is a warning alert — check it out!</Alert> */}
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
