import { gsap } from "gsap";
import React,{useState,useEffect} from 'react'
import Grid from '@mui/material/Grid';
import SanityClient from '../../../config/client'
export default function withAnimationSocialMedia() {
    const [list, setList] = useState([])
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    React.useEffect(() => {
        gsap.to(q(".images"), {
            y: 20,
            // scale: 0.1,
            stagger: 0.33,
            repeat: -1,
            // repeatDelay: 1,
            ease: "bounce",
            yoyoEase: "power3",
            duration: 2,
            yoyo: true
        });
    })

    useEffect(() => {
        async function fetchData() {
            let response = await SanityClient.fetch(`
            *[_type == "socialMedia"]{
                link,
                icon{
                    asset->{
                        _id,
                        url
                    },
                }
            }
            `);
            let data = await response;
            let sortedList = data.sort((a: any, b: any) => a.id - b.id);
            setList(sortedList)
        }
            fetchData()
    }, [])
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, { rotationZ: "+=860", scale: 1 });
    };

    const DisplayAnimation = (obj: any) => {
        console.log("DisplayAnimation ::",obj);
        return (
            <div onMouseEnter={onEnter} className="images overflow-hidden p-4 cursor-pointer border-2 " >
                <a href={obj.link} target="_blank">
                    <img className='w-24 h-24 rounded-full object-cover' src={obj.icon.asset?.url} />
                </a>
            </div>
        )
    }
    return (
        <Grid className='grid grid-rows-3 grid-flow-col ml-16 rounded-3xl p-8' ref={el}>
            {list.map((items:any) => {
                return (
                    DisplayAnimation(items)
                )
            })
            }
        </Grid>
    )

}

