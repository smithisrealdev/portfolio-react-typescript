import React,{Suspense,useEffect} from 'react'
import { gsap } from 'gsap'
import Grid from '@mui/material/Grid';
import ProfileBg from '../../../images/profile-bg.png'
import StarIcon from '../../../images/star-icon.png'
import CodingIcon from '../../../images/coding.png'
import Age from '../../../images/age.png'
export default function wapperProfile() {
    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const q = gsap.utils.selector(el);
    useEffect(() => {
    gsap.to(q(".item1"),{x:30 ,y:4,duration:1})  
    gsap.to(q(".item2"),{x:20 ,y:4,duration:1})  
    gsap.to(q(".item3"),{x:-20 ,y:4,duration:1})  
    }, [])
    return (
        <Suspense fallback={<></>} >
            <Grid ref={el} item xs={6} className='flex flex-1'>
                {/* <div className=' w-52 shadow-2xl bg-red-100  h-10 resume-custom -z-0 ' /> */}
                <Grid item xs={2} className=' grid grid-row-2' >
                    <Grid item xs={12} className='item1 font-atma z-30 w-56  text-white h-28 pt-2 flex justify-center' >
                        <img className='rounded-md object-cover mr-4 w-10 h-10' src={CodingIcon} />
                        <p >
                            <b>React Framework</b> <br />
                         (2 year++)
                     </p>
                    </Grid>
                    <Grid item xs={12} className='item2 font-atma z-30 flex text-white h-28 ' >
                        <img className='rounded-md object-cover mr-2 w-10 h-10' src={StarIcon} />
                        <p >
                            <b>NinkName</b><br /> (Oat)  <br />
                        </p>
                    </Grid>
                </Grid>
                <Grid item xs={8} className=' justify-center flex flex-1 self-start border-2 border-white rounded-tl-custom shadow-md shadow-white z-0 ' >
                    <img className='rounded-md object-cover h-96 w-96 ' src={ProfileBg} />
                </Grid>
                <Grid item xs={2} className='item3 flex items-center' >
                    <Grid item xs={12} className='font-atma z-30 w-56  text-white h-28 items-center flex' >
                        <img className='rounded-md object-cover mr-2 w-10 h-10' src={Age} />
                        <p >
                            <b>Age</b><br /> (25 Year old)  <br />
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </Suspense>

    )
}
