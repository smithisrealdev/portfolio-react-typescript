import React, { Suspense } from 'react'
import { dataList } from '../mock/dataMock';
import Projects from '../../../shared/components/Projects'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
export default function project() {
    return (
        <Projects data={dataList} title='project.title' />
    )
}
