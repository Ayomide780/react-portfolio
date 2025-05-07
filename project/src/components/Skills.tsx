import React from 'react';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML & CSS', proficiency: 95 },
      { name: 'JavaScript', proficiency: 90 },
      { name: 'React', proficiency: 92 },
      { name: 'Tailwind CSS', proficiency: 88 }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', proficiency: 82 },
      { name: 'Express', proficiency: 80 },
      { name: 'MongoDB', proficiency: 75 },
      { name: 'REST API Design', proficiency: 85 }
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', proficiency: 90 },
     
      { name: 'Webpack', proficiency: 70 },
    
   
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These are the technologies and tools I've been working with recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out animate-growWidth"
                        style={{ width: `${skill.proficiency}%`, animationDelay: `${index * 150}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;