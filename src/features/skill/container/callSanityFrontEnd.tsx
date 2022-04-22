import React,{useState,useEffect} from 'react'
import SanityClient from '../../../config/client'

export default function callSanityFrontEnd() {
    const [listFrontEnd, setListFrontEnd] = useState([])

    
    useEffect(() => {
        async function fetchFrontEnd() {
            let response = await SanityClient.fetch(`
            *[_type == "frontEnd"]{
                title,
                icon{
                    asset->{
                        _id,
                        url
                    },
                }
            }
            `);
            let data = await response;
            setListFrontEnd(data)
        }    
        fetchFrontEnd()
    }, [])
    for (let index = 0; index < listFrontEnd.length; index++) {
        console.log("listFrontEnd ::",listFrontEnd[index].icon.asset);
    } 
 
    return listFrontEnd && (
        <div>
            {listFrontEnd.map((list:any,index)=> {
               return  <img  key={index} src={list.icon.asset && list.icon.asset.url} className='w-24 h-24'/>
            })}
           
        </div>
    )
}
