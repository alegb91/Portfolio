import React from 'react'
import {
    AboutMePage,
    ContactFormPage,
    ProyectsPage,
    StartingPage
  } from '../pages';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {
  
    const location = useLocation() 
  
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<StartingPage />}/>
                <Route path='/aboutMe' element={<AboutMePage />}/>
                <Route path='/contactForm' element={<ContactFormPage />}/>
                <Route path='/proyects' element={<ProyectsPage />}/>
            </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes;