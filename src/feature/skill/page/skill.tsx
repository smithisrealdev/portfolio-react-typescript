import React from 'react';
import Title from '../../../shared/components/animation/withAnimationHoveText';
import Box from '@mui/material/Box';
import { FrontEndList } from '../mock/dataFrontEndList';
import { BackEndList } from '../mock/dataBackEndlist';
import { OtherList } from '../mock/dataOtherList';
import { FormatMessage } from '../../change_lang/change'
import CardLsit from '../components/cardList'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
export default function skill() {
    return (
        <Container maxWidth="xl" className="pl-28 bg-main pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('skill.title')} />
            <Grid container spacing={2} className='flex justify-between'>
                <Grid item xs={4} className=' border-r-2'>
                    <Grid className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Front End
                        </h1>
                    </Grid>
                    <CardLsit listCard={FrontEndList} />
                </Grid>
                <Grid item xs={4} className='border-r-2'>
                    <Grid className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Back End
                        </h1>
                    </Grid>
                    <CardLsit listCard={BackEndList} />
                </Grid>
                <Grid item xs={4}>
                    <Grid className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Other
                        </h1>
                    </Grid>
                    <CardLsit listCard={OtherList} />
                </Grid>
            </Grid>
        </Container>
    )
}
