import React from 'react';
import { motion } from 'framer-motion';
//import './About.css';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>About Me</h1>
      <p>I'm passionate about [Your Interests].</p>
    </motion.div>
  );
};

export default About;