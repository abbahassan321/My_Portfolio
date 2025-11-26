import React from 'react';
import { portfolioData } from '@/data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Technical Toolkit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A versatile full-stack skill set ready for modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((group) => (
            <div 
              key={group.category} 
              className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl text-blue-600 mr-3">{group.icon}</span>
                <h3 className="text-xl font-bold">{group.category}</h3>
              </div>

              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center text-base">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
