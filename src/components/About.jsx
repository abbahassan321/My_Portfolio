import React from 'react';
import { portfolioData } from '@/data/portfolioData';

const About = () => {
  const { about, hero } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Little About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          <div className="w-full lg:w-1/3 flex flex-col items-center">

            <div className="w-64 h-64 bg-blue-200 rounded-full mb-6 flex items-center justify-center overflow-hidden border-4 border-blue-600 shadow-xl">
              <span className="text-sm text-gray-700">Your Professional Photo Here</span>
            </div>

            <div className="w-full bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h4>

              <ul className="space-y-3">
                {about.funFacts.map((fact, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="font-semibold">{fact.label}:</span>
                    <span className="text-blue-600 font-medium">{fact.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 border-l-4 border-blue-600 pl-4 italic">
              "{about.summary}"
            </p>

            <div className="space-y-6">
              {about.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <a 
              href={hero.resumeLink} 
              download
              className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Download Full Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
