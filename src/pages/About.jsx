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
      <p>As a dynamic and results-driven professional with a proven track record at Cook Children's Healthcare as a Business Intelligence Developer and Software Engineer at Accenture, I bring a unique blend of technical expertise, analytical prowess, and a passion for solving complex problems with data-driven solutions. At Cook Children's, I designed and implemented scalable BI solutions, leveraging tools like Power BI, Tableau, and SQL Server to transform raw data into actionable insights, enabling stakeholders to make informed decisions that improved patient outcomes and operational efficiency. At Accenture, I engineered robust software systems using cutting-edge technologies such as Python, Java, Apache Spark, and AWS, delivering high-performance applications that met the evolving needs of global clients. My hands-on experience with machine learning frameworks like TensorFlow and PyTorch, coupled with my ability to architect data pipelines using ETL tools and cloud platforms, positions me at the intersection of data engineering, software development, and data science. With a relentless curiosity for emerging technologies like generative AI, LLMs, and real-time analytics, I thrive in environments where innovation meets impact, and I am eager to bring my expertise to a forward-thinking organization that values data as a strategic asset..</p>
    </motion.div>
  );
};

export default About;