import React from 'react';
import Project from './features/project/page/project'
import Home from './features/layout/page/layout'
import Hobby from './features/hobby/page/hobby'
import ComponentPage from './features/component_page/page/component'
import Contact from './features/contact/page/contact'
import Navbar from './features/header/page/header'
import Loading from './utility/loading'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './features/footer/page/footer';
function App() {
  return (
    <div className='flex flex-col bg-main'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className='xl:px-28 xl:py-12 lg:p-12 md:p-8 sm:p-4 bg-main'> <Home />  </div>} />
          <Route path="/project" element={<div className='xl:px-28 xl:py-4 lg:p-12 bg-main'> <Project /> </div>} />
          <Route path="/hobby" element={<div className='xl:px-28 xl:py-4 lg:p-12 bg-main'> <Hobby /></div>} />
          <Route path="/component" element={<div className='xl:px-28 xl:py-4 lg:p-12 bg-main'> <ComponentPage /></div>} />
          <Route path="/contact" element={<div className='xl:px-28 xl:py-4 lg:p-12 bg-main'> <Contact /></div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

