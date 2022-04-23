import React from 'react'
import Grid from '@mui/material/Grid';
import Card from './card'
export default function cardList({listCard}: any) {
    return (
        <Grid className='grid grid-cols-3 gap-4 md:gap-10 pl-6 pr-6'>
            {
                listCard.map((list:any)=>{
                    return  <Card key={list.id} imgUrl={list.icon?.asset?.url} text={list?.title} />
                   } )
            }
        </Grid>
    )
}
