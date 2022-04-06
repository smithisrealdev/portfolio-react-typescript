import React from 'react'
import Grid from '@mui/material/Grid';
import GitIcon from '../../../images/git-lcon.jpeg'
import PythonIcon from '../../../images/python-icon.png'
import JavaIcon from '../../../images/javaIcon.png'
import PostgreSqlIcon from '../../../images/postgreSQL-icon.webp'
import KongIcon from '../../../images/kong-icon.png'
import JiraIcon from '../../../images/jira-icon.png'
import KibanaIcon from '../../../images/elastic_logo.png'
import ViteIcon from '../../../images/vite-icon.webp'
import NetlifyIcon from '../../../images/netlify-icon.png'
import JenkinsIcon from '../../../images/jenkins-icon.png'
import JestIcon from '../../../images/jest-icon.png'
import Card from '../components/card'
export default function withOtherList() {
    return (
        <Grid className='grid grid-cols-3 pl-6'>
            <Card imgUrl={GitIcon} text="Git" />
            <Card imgUrl={JenkinsIcon} text="Jenkins" />
            <Card imgUrl={ViteIcon} text="Vite" />
            <Card imgUrl={KongIcon} text="Kong" />
            <Card imgUrl={JiraIcon} text="Jira" />
            <Card imgUrl={KibanaIcon} text="Kibana" />
            <Card imgUrl={PythonIcon} text="Python" />
            <Card imgUrl={JavaIcon} text="Java" />
            <Card imgUrl={PostgreSqlIcon} text="PostgreSQL" />
            <Card imgUrl={NetlifyIcon} text="Netlify" />
            <Card imgUrl={JestIcon} text="Jest" />
        </Grid>
    )
}
