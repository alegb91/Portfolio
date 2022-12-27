import React from 'react';
import {
    ContactForm,
    NavBar
} from '../components';
import { motion } from "framer-motion";

const ContactFormPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
        <NavBar />
        <ContactForm />
    </motion.div>
  )
}

export default ContactFormPage;