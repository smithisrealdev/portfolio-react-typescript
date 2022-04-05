import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import Javascript from '../../../images/javascript.png'
import ReactImg from '../../../images/react_icon.svg'
import CssIcon from '../../../images/css-icon.png'
import HtmlIcon from '../../../images/html-icon.png'
import TypeScriptImg from '../../../images/typescript-icon.svg'
import NodeIcon from '../../../images/nodejs-icon.jpeg'
import Box from '@mui/material/Box';
import Card from '../components/card'
import Grid from '@mui/material/Grid';
export default function skill() {
    return (
        <Box className="pl-28 w-full h-full bg-black">
            <Title noUseLeave={false} noUseEnter={true} text='S|k|i|l|l' />
            <div className='flex justify-between pl-16'>
                <div className='w-3/4'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Fron End
                        </h1>
                    </div>

                    <Grid className='grid grid-cols-3'>
                        <Card imgUrl={ReactImg} text="React" />
                        <Card imgUrl={TypeScriptImg} text="TypeScript" />
                        <Card imgUrl={Javascript} text="Javascript" />
                        <Card imgUrl={CssIcon} text="Css" />
                        <Card imgUrl={HtmlIcon} text="Html" />
                    </Grid>
                </div>
                <div className='w-3/4'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Back End
                        </h1>
                    </div>
                    <Grid className='grid grid-cols-3'>
                        <Card imgUrl={NodeIcon} text="NodeJs" />
                        <Card imgUrl={TypeScriptImg} text="TypeScript" />
                        <Card imgUrl={Javascript} text="Javascript" />
                        <Card imgUrl={CssIcon} text="Css" />
                        <Card imgUrl={HtmlIcon} text="Html" />
                    </Grid>
                </div>
                <div className='w-3/4'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Other
                        </h1>
                    </div>
                    <Grid className='grid grid-cols-3'>
                        <Card imgUrl={ReactImg} text="React" />
                        <Card imgUrl={TypeScriptImg} text="TypeScript" />
                        <Card imgUrl={Javascript} text="Javascript" />
                        <Card imgUrl={CssIcon} text="Css" />
                        <Card imgUrl={HtmlIcon} text="Html" />
                    </Grid>
                </div>


            </div>
        </Box>
    )
}
