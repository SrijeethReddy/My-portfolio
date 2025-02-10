import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'url(/assets/background1.jpg)', // Add your image paths here
    'url(/assets/background2.jpg)',
    'url(/assets/background3.jpg)',
    'url(/assets/background4.jpg)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <motion.div
      className="home"
      style={{
        backgroundImage: backgrounds[backgroundIndex],
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="overlay">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Hi, I'm <span className="highlight">Sai Srijeeth Reddy K</span>. I'm a seasoned full-stack developer with expertise in <span className="highlight">React</span>, <span className="highlight">Node.js</span>, and <span className="highlight">MongoDB</span>.
        </motion.p>
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="/about" className="cta-button">Learn More About Me</a>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;