import React,{useRef} from 'react';
import Title from '../../../shared/components/animation/withAnimationHoveText';
import Box from '@mui/material/Box';
import { FrontEndList } from '../mock/dataFrontEndList';
import { BackEndList } from '../mock/dataBackEndlist';
import { OtherList } from '../mock/dataOtherList';
import { FormatMessage } from '../../change_lang/change'
import CardLsit from '../components/cardList'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { SnapList, SnapItem } from 'react-snaplist-carousel';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
interface TypeProps {
    url: string,
    text: string
}
export default function skill() {
    const snapList = useRef(null);
    const _renderItem = ({ url, text }: TypeProps) => (
        <SnapItem snapAlign="start">
            <Card  className='mt-4 xl:h-28 xl:w-24 md:h-24 md:w-20 ' >
                <CardActionArea>
                    <img
                        className=' object-cover w-full xl:h-20 lg:h-20 md:h-16 sm:h-14 bg-main'
                        src={url}
                    />
                    <Box className='flex w-full items-center justify-center' >
                        <p className='xl:text-lg md:text-md font-atma font-medium' >
                            {text}
                        </p>
                    </Box>
                </CardActionArea>
            </Card>
        </SnapItem>
    );
    return (
        <Container maxWidth="xl" className="pl-28 bg-main pb-24">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('skill.title')} />
            <Grid container spacing={2} sx={{ display: { lg: 'flex', md: 'none', sm: 'none',xs:'none' } }}>
                <Grid item xs={4} className='border-r-2'>
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
            <Grid item xs={12} className='lg:hidden md:flex sm:flex xl:hidden'>
                <SnapList ref={snapList} className='gap-8'>
                     {FrontEndList.map((item) => {return(_renderItem(item))})}
                </SnapList>
            </Grid>
        </Container>
    )
}
