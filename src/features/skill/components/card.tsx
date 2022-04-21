import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { onEnter } from '../container/withHoverCard'
type cardProps = {
    imgUrl: string,
    text: string
}
export default function card({ imgUrl, text }: cardProps) {
    return (
        <Card onMouseEnter={onEnter} className='mt-4 xl:h-28 xl:w-24 lg:h-24 lg:w-20 ' >
            <CardActionArea>
                <img
                    className=' object-cover w-full xl:h-20 lg:h-16 md:h-14 sm:h-10 bg-main'
                    src={imgUrl}
                />
                <Box className='flex w-full items-center justify-center' >
                    <p className='xl:text-lg md:text-md font-atma font-medium' >
                        {text}
                    </p>
                </Box>
            </CardActionArea>
        </Card>
    )
}
