import React from 'react';

const Skills = () => {
  
  const skills = [
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React.js', level: 'Intermediate' },
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Figma', level: 'Advanced' },
    { name: ' ArchCad', level: 'Intermediate' },
    { name: 'ArcGis Pro', level: 'Intermediate' },
    { name: 'Twinmotion', level: 'Intermediate' },
    { name: 'Surveying data collection', level: 'Advanced' },
  ];

  return (
    <section name='skills' className='py-12 h-screen w-full bg-gray-500 px-12 via-gray-800 '>
    <div className="container max-w-creen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <p className='mx-12 text-4xl font bold inline border-b-4 text-white'>About</p>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mx-7 p-6 bg-gray-100 rounded-lg shadow-md pr-48"
          >
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <p className="text-sm">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;
