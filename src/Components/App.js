import React from 'react';
import Header from './Header';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnquireNow from './EnquireNow';
import {NavBar}  from './NavBar';
import { Contact } from './Contact';
import { CourseOffered } from './CourseOffered';

export default function App() {
  return (
    // <div><Header/></div>

    <>
    <NavBar/>
         <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/bookNow" element={<EnquireNow />} />
            {/* <Route path="/aboutUs" element={<Contact />} /> */}
            <Route path="/courses" element={<CourseOffered />} />
         </Routes>
         <Contact/>
      </>

    
  )
}
