import React from 'react'
import { dataList } from '../mock/dataMock';
import Projects from '../../../shared/components/Projects'
export default function component() {
    return (
        <Projects data={dataList} title='component.title' />
    )
}
