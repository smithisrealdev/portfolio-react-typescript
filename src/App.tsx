import React from 'react';
import Project from '../src/feature/project/page/project'
import Home from '../src/feature/home/page/home'
import Hobby from '../src/feature/hobby/page/hobby'
import ComponentPage from '../src/feature/component/page/component'
import Navbar from '../src/feature/header/page/header'
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
          <Route path="/project" element={<Project />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/component" element={<ComponentPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

