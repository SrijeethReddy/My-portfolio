import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiDownload, FiDatabase, FiCode, FiServer } from "react-icons/fi";

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div
      className="max-w-screen-lg mx-auto px-4 md:px-10 py-12 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Hi! I'm Srijeeth, a passionate software engineer delivering 
            <span className="font-semibold text-blue-600"> high-performance applications</span> and 
            <span className="font-semibold text-purple-600"> impactful data solutions</span>. 
            I thrive in transforming raw ideas into working applications that provide real business value.
          </p>
        </motion.div>
      </section>

      {/* Professional Experience */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Professional Journey
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FiDatabase className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Business Intelligence Developer</h3>
            </div>
            <p className="text-gray-600">
              At Cook Children's Healthcare, developed scalable BI solutions with 
              <span className="text-blue-600"> Power BI</span>, 
              <span className="text-purple-600"> Tableau</span>, and 
              <span className="text-blue-600"> SQL Server</span> to improve patient outcomes.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <FiCode className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
            </div>
            <p className="text-gray-600">
              At Accenture, engineered high-performance solutions using 
              <span className="text-blue-600"> Python</span>, 
              <span className="text-purple-600"> Java</span>, and 
              <span className="text-blue-600"> AWS</span> cloud services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resume Download */}
      <section className="mb-20 text-center">
        <motion.div
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full cursor-pointer transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiDownload className="mr-3" size={24} />
          <a
            href={`${process.env.PUBLIC_URL}/srijeethRES.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* Closing Section */}
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Let's Create Something Amazing!
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I thrive in collaborative environments where innovation meets impact. Whether you have a project in mind or just want to connect, let's explore how we can create meaningful experiences through technology.
        </p>
        
        <div className="flex justify-center space-x-6">
          <motion.div 
            className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <FiServer className="text-blue-600 text-2xl" />
          </motion.div>
          
          <motion.div 
            className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <FiCode className="text-purple-600 text-2xl" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;