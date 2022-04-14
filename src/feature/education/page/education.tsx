import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change'
import University from '../../../images/education-img.png'
import FirebaseImg from '../../../images/firebase-img.png'
import PlusIcon from '../../../images/plus-icon.png'
import ArduinoIcon from '../../../images/arduino-icon.webp'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
export default function education() {
    return (
        <Container maxWidth="xl" className="bg-main pl-20 h-full">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('education.title')} />
            <h1 className='text-white text-xl font-semibold pb-4 pl-8'>
                History
                    </h1>
            <div className='flex'>

                <div className='basis-1/6 mr-28'>
                    <div className='h-0 pb-custom relative overflow-hidden rounded-md mt-6  '>
                        <img className='absolute top-0 left-0 w-full h-full object-contain '
                            src={University}
                        />
                    </div>
                </div>
                <div className=' basis-6/6 mr-40 flex items-center '>
                    <p className='text-xl font-light font-atma text-white  '>
                        MAHASARAKHAM UNIVERSITY <br /> (2016-2020)
                    <br />- Faculty of Informatics Computer Science
                    </p>
                    <div className='w-40 h-1 bg-white' />
                    <p className='text-xl font-light font-atma text-white ml-8 '>
                        NONG RUEA WHITTIYA HIGH SCHOOL <br /> (2010-2016)
                    <br />- Sciences and Mathematics Program
                    </p>
                </div>
            </div>
            <div className='mt-16 pl-8 pb-8 '>
                <Grid item xs={1}>
                    <h1 className='text-white text-xl font-semibold pb-4'>
                        Graduate Project
                    </h1>
                    <div className='flex flex-col'>
                        <Grid className='mb-8'>
                            <Grid item xs={4} className=' mr-40'>
                                <p className='text-xl font-light font-atma text-white'>
                                    It's a mix during hydroponic plants and raising fish in the pond therefore <br /> brought in the internet of things (iot) to control the growth of fish and plants
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className='mt-8 flex pl-12'>
                            <Grid item xs={2} >
                                <img className='w-40 h-40 rounded-md'
                                    src={FirebaseImg}
                                />
                            </Grid>

                            <Grid item xs={1} className='flex items-center'>
                                <img className='w-12 h-12 rounded-md'
                                    src={PlusIcon}
                                />
                            </Grid>
                            <Grid item xs={2} >
                                <img className='w-40 h-40 rounded-md object-cover'
                                    src={ArduinoIcon}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </div>

        </Container>
    )
}
