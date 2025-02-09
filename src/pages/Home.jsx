import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Sai Srijeeth Reddy K. I'm a seasoned full-stack developer with expertise in React, Node.js, and MongoDB.</p>
    </motion.div>
  );
};

export default Home;