import React from 'react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skills = [
    { name: 'React', description: 'Building dynamic UIs' },
    { name: 'JavaScript', description: 'Frontend and backend development' },
    { name: 'CSS', description: 'Styling and animations' },
  ];

  return (
    <div className="page">
      <h1>My Skills</h1>
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;