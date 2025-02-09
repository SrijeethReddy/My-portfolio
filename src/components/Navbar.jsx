import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/"><FaHome /> Home</Link>
      <Link to="/about"><FaUser /> About</Link>
      <Link to="/skills"><FaCode /> Skills</Link>
      <Link to="/education"><FaGraduationCap /> Education</Link>
      <Link to="/contact"><FaEnvelope /> Contact</Link>
    </motion.nav>
  );
};

export default Navbar;