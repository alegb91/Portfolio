import React from 'react';
import {
    AboutMe,
    NavBar
} from '../components';
import { motion } from "framer-motion";

const AboutMePage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
        <NavBar />
        <AboutMe />
    </motion.div>
  )
}

export default AboutMePage;