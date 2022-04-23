import React, { useEffect,useState } from 'react'
import Projects from '../../../shared/components/Projects'
import SanityClient from '../../../config/client'
import Loading from '../../../utility/loading'
export default function hobby() {
    const [listProject, setListProject] = useState([])
    const [done, setDone] = useState(false)
    useEffect(() => {
        async function fetchData() {
            let response = await SanityClient.fetch(`
            *[_type == "hobby"]{
                id,
                title,
                detail,
                link,
                url{
                    asset->{
                        _id,
                        url
                    },
                },
                tool[]->{
                    id,
                    image{
                        asset->{
                            url
                        },
                    }
                }
            }
            `);
            let data = await response;
            let sortedList = data.sort((a: any, b: any) => a.id - b.id);
            setListProject(sortedList)
            setDone(true)
        }
        setTimeout(() => {
            fetchData()
        }, 2000)
    }, [])
    
    return !done ? (
        <Loading />
    ) : (
        <Projects data={listProject} title='hobby.title' />
    )
}
