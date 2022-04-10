import React, { useEffect, useRef } from 'react';
import Blog from '../../personal_profile/page/personal_profile'
import About from '../../about_me/page/about'
import Skill from '../../skill/page/skill'
import Box from '@mui/material/Box';
import Eduction from '../../education/page/education';
import Experiance from '../../employment_history/page/experiance';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
function home() {
  // gsap.registerPlugin(ScrollTrigger)
  // gsap.defaults({ ease: "none", duration: 2 })
  // const tl = gsap.timeline();
  // const circleRef = useRef(null);

  // useEffect(() => {
  //   tl.from(".page2", { yPercent: 100 })
  //     .from(".page3", { xPercent: -100 })
  // }, []);


  // ScrollTrigger.create({
  //   animation: tl,
  //   trigger: "#container",
  //   start: "top center",
  //   end: "+=4000",
  //   scrub: true,
  //   pin: true,
  //   anticipatePin: 1,
  // })



  return (
    <Box  className='#container bg-main w-full'>
      {/* <Navbar /> */}
      {/* <div className='page1 bg-red-500 ' >
        <Blog />
      </div>
      <div className='page2 bg-blue-500 h-full' >
        <Skill />
      </div>
      <div className='page3 bg-yellow-500' >
        <About />
      </div> */}
       <Blog />
       <Skill />
       <About />
       {/* <Eduction /> */}
       <Experiance />
    </Box>
  );
}

export default home;

