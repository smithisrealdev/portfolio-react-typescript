import React, { Suspense } from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { dataList } from '../mock/dataMock';
import { gsap } from "gsap";
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
export default function project() {
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.fromTo(currentTarget,
            {
                scale: 1.3
            },
            {
                scale: 1
            });
    };

    interface CardProps {
        id: number,
        url: string,
        title: string,
        detail: string,
        link: string,
        toolList:{
                id:number,
                img:string
        }[]
    }
    const renderCardProject = ({ url, title, detail, link,toolList }: CardProps) => {
        return (
            <Card sx={{ maxWidth: 325 }}>
                <a href={link ? link : undefined} target="_blank">
                    <CardMedia
                        onMouseEnter={onEnter}
                        className=' object-cover h-52 bg-main'
                        component="img"
                        image={url}
                    />
                    <CardContent className='h-36'>
                        <h1 className='font-atma font-semibold'>
                            {title}
                        </h1>
                        <p className='font-atma font-light'>
                            {detail}
                        </p>
                    </CardContent>
                    <CardActions disableSpacing className='text-white font-atma border-t-2 bg-indigo-400'>
                       <Grid item xs={12} className='flex flex-1 gap-2'>
                           {toolList.map((item)=> {
                               return (
                                <img src={item.img} className='h-10 w-10 rounded-md object-cover'/>
                               )
                           })}
                       </Grid>
                    </CardActions>
                </a>
            </Card>
        )
    }
    return (
        <Container maxWidth="xl" className="pb-20">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('project.title')} />
            <Grid item xs={12} className='grid grid-cols-3 gap-10' >
                {dataList.map((items) => {
                    return renderCardProject(items)
                })}
            </Grid>
        </Container>
    )
}
