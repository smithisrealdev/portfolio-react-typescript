import React, { Suspense, useState, useEffect } from 'react';
import Title from '../../../shared/components/animation/withAnimationHoveText';
import Box from '@mui/material/Box';
import { FormatMessage } from '../../lang/change'
import CardLsit from '../components/cardList'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { SnapList, SnapItem } from 'react-snaplist-carousel';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import ReactIcon from '../../../assets/images/React.webp'
import GolangIcon from '../../../assets/images/Go-Logo.png'
import ProgressFrontEnd from '../components/borderLinearProgressFrontEnd'
import ProgressBackEnd from '../components/borderLinearProgressBackEnd'
import Text from '../../../shared/components/Text'
import SanityClient from '../../../config/client'
interface TypeProps {
    id: number,
    title: string,
    icon: any,
}
export default function skill() {
    const [listFrontEnd, setListFrontEnd] = useState([])
    const [listBackEnd, setListBackEnd] = useState([])
    const [listOther, setListOther] = useState([])
    useEffect(() => {
        async function fetchFrontEnd() {
            let response = await SanityClient.fetch(`
            *[_type == "frontEnd"]{
                id,
                title,
                icon{
                    asset->{
                        _id,
                        url
                    },
                }
            }
            `);
            let data = await response;
            let sortedList = data.sort((a: any, b: any) => a.id - b.id);
            setListFrontEnd(sortedList)
        }
        async function fetchBackEnd() {
            let response = await SanityClient.fetch(`
            *[_type == "backEnd"]{
                id,
                title,
                icon{
                    asset->{
                        _id,
                        url
                    },
                }
            }
            `);
            let data = await response;
            let sortedList = data.sort((a: any, b: any) => a.id - b.id);
            setListBackEnd(sortedList)
        }
        async function fetchOther() {
            let response = await SanityClient.fetch(`
            *[_type == "other"]{
                id,
                title,
                icon{
                    asset->{
                        _id,
                        url
                    },
                }
            }
            `);
            let data = await response;
            let sortedList = data.sort((a: any, b: any) => a.id - b.id);
            setListOther(sortedList)
        }
        fetchFrontEnd()
        fetchBackEnd()
        fetchOther()
    }, [])
    const _renderItem = ({ id,icon, title }: TypeProps) => (
        <SnapItem key={id} snapAlign="start">
            <Card className='mt-4 xl:h-28 xl:w-24 md:h-24 md:w-20 sm:h-22 sm:w-18 ' >
                <CardActionArea>
                    <img
                        className=' object-cover w-full xl:h-20 lg:h-20 md:h-16 sm:h-18 bg-main'
                        src={icon.asset.url}
                    />
                    <Box className='flex w-full items-center justify-center' >
                        <p className='xl:text-lg md:text-base sm:text-sm font-medium' >
                            {title}
                        </p>
                    </Box>
                </CardActionArea>
            </Card>
        </SnapItem>
    );
    return (
        <Container maxWidth="xl" className="pl-28 bg-main pb-24 font-atma text-white">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('skill.title')} />
            <Grid container spacing={2} >
                <div className='lg:flex md:flex sm:hidden xl:flex'>
                    <Grid item xs={4} className='border-r-2 '>
                        <Grid className='justify-center flex'>
                            <Text text='Front End' className='font-semibold' />
                        </Grid>
                        <CardLsit listCard={listFrontEnd} />
                    </Grid>
                    <Grid item xs={4} className='border-r-2'>
                        <Grid className='justify-center flex'>
                            <Text text='Back End' className='font-semibold' />
                        </Grid>
                        <CardLsit listCard={listBackEnd} />
                    </Grid>
                    <Grid item xs={4}>
                        <Grid className='justify-center flex'>
                            <Text text='Other' className='font-semibold' />
                        </Grid>
                        <CardLsit listCard={listOther} />
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={12} className='lg:hidden md:hidden sm:flex xl:hidden'>
                <SnapList direction='horizontal' className='gap-8'>
                    {listFrontEnd.map((item:any) => { return (_renderItem(item)) })}
                </SnapList>
            </Grid>
            <Suspense fallback={<h1>...Loading</h1>}>
                <div className='mt-12'>
                    <h1 className=' mb-2'>
                        FrontEnd Developer
                </h1>
                    <ProgressFrontEnd />
                </div>
            </Suspense>

            <div className='mt-10 '>
                <h1 className='mb-2'>
                    BackEnd Developer
                </h1>
                <ProgressBackEnd />
            </div>
            <div className='mt-10 flex flex-row gap-8 items-center justify-center '>
                <div className='flex items-center justify-center gap-2'>
                    <img src={ReactIcon} className='w-8 h-8' />
                    <h1 className='sm:text-sm'>React Framework <strong className='text-orange-600'>2</strong> Year++</h1>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <img src={GolangIcon} className='w-12 h-12' />
                    <h1 className='sm:text-sm'>Go language <strong className='text-green-300'>1</strong> Year++</h1>
                </div>
            </div>
        </Container>
    )
}
