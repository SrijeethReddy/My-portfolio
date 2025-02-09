import React from 'react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skills = [
    { name: 'React', description: 'Building dynamic UIs' },
    { name: 'JavaScript', description: 'Frontend and backend development' },
    { name: 'CSS', description: 'Styling and animations' },
    { name: 'HTML', description: 'Markup and structure' },
    { name: 'Node.js', description: 'Server-side development' },
    { name: 'Express.js', description: 'Web framework for Node.js' },
    { name: 'MongoDB', description: 'NoSQL database for data storage' },
  ];

  return (
    <div className="page">
      <h1>My Skills</h1>
      {skills.map((skill, index) => (

        <SkillCard key={index}  
           skill={skill} />
      ))}
    </div>
  );
};

export default Skills;