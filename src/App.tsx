import React from 'react';
import AboutMe from '../src/feature/about_me/page/about'
import Experiance from './feature/experaince/page/experiance'
import Education from '../src/feature/education/page/education'
import Skill from '../src/feature/skill/page/skill'
import Home from '../src/feature/home/page/home'
import Navbar from '../src/feature/header/page/header'
import Contact from './feature/contact/page/contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className='w-full h-screen bg-main'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/experiance" element={<Experiance />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

