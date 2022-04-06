import React from 'react'
import Grid from '@mui/material/Grid';
import NodeJsIcon from '../../../images/nodejs-icon.png'
import GolangIcon from '../../../images/golang-icon.webp'
import MariaDBIcon from '../../../images/mariaDB-icon.png'
import CassandraDBIcon from '../../../images/cassandraDb-icon.jpeg'
import OracleIcon from '../../../images/oracle-icon.jpeg'
import MongoDBIcon from '../../../images/mongoDB-icon.webp'
import FirebaseIcon from '../../../images/firebase-icon.png'
import Card from '../components/card'
export default function withBackEndList() {
    return (
        <Grid className='grid grid-cols-3 pl-6'>
            <Card imgUrl={GolangIcon} text="Golang" />
            <Card imgUrl={NodeJsIcon} text="NodeJs" />
            <Card imgUrl={MariaDBIcon} text="MariaDB" />
            <Card imgUrl={OracleIcon} text="Oracle" />
            <Card imgUrl={CassandraDBIcon} text="Cassandra" />
            <Card imgUrl={MongoDBIcon} text="MonogoDB" />
            <Card imgUrl={FirebaseIcon} text="Firebase" />
        </Grid>
    )
}
