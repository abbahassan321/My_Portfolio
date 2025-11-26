import React from "react";
import { portfolioData } from "@/data/portfolioData";// ✅ FIXED IMPORT

const Projects = () => {
  const projects = portfolioData?.projects ?? []; // ✅ Prevent crash

  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Currently engineering large-scale solutions for the Nigerian telecom and education sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="p-6 pb-4">
                <div className="flex justify-between">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {project.category}
                  </span>

                  {project.status === "In Progress" && (
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                      🚧 In Development
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mt-3">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              </div>

              <div className="px-6 mb-auto">
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {project.features?.slice(0, 3).map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-t">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack?.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-gray-100 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.links?.code && project.links.code !== "#" ? (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 border rounded-lg text-sm"
                    >
                      View Code
                    </a>
                  ) : (
                    <span className="flex-1 text-center py-2 border rounded-lg text-sm text-gray-400">
                      Private Repo
                    </span>
                  )}

                  {project.links?.demo && project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
