import React, { useEffect, useState } from 'react';
import Blog from '../../personal_profile/page/personal_profile'
import About from '../../about/page/about'
import Skill from '../../skill/page/skill'
import Box from '@mui/material/Box';
import Eduction from '../../education/page/education';
import Experiance from '../../experaince/page/experiance';
import Project from '../../project/page/project';
import Contact from '../../contact/page/contact';
import Loading from '../../../utility/loading'
function layout() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setDone(true)
    }, 2000);
  }, [])
  return !done ? (
    <Loading />
  ) : (
    <Box className='flex flex-col min-h-screen'>
      <Blog />
      < About />
      <Skill />
      {/* <Eduction /> */}
      <Experiance />
      {/* <Project /> */}
      <Contact />
    </Box >
  );
}

export default layout;

