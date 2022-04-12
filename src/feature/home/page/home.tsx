import React, { useEffect, useRef } from 'react';
import Blog from '../../personal_profile/page/personal_profile'
import About from '../../about_me/page/about'
import Skill from '../../skill/page/skill'
import Box from '@mui/material/Box';
import Eduction from '../../education/page/education';
import Experiance from '../../employment_history/page/experiance';
import Project  from '../../project/page/project';
function home() {

  return (
    <Box  className='#container bg-main w-full'>
       <Blog />
       <About />
       <Skill />
       {/* <Eduction /> */}
       <Experiance />
       <Project />
    </Box>
  );
}

export default home;

