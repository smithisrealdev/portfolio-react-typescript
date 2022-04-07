import React from 'react'
import Grid from '@mui/material/Grid';
import Card from './card'
export default function cardList({listCard}: any) {
    return (
        <Grid className='grid grid-cols-3 pl-6'>
            {
                listCard.map((card: any)=>{
                    return  <Card imgUrl={card.url} text={card.text} />
                   } )
            }
        </Grid>
    )
}
