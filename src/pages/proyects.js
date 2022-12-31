import React from 'react';
import {
    Proyects,
    NavBar
} from '../components';
import { motion } from "framer-motion";

const ProyectsPage = () => {

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
        <NavBar />
        <Proyects />
    </motion.div>
  )
}

export default ProyectsPage;